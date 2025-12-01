const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  verifyAdminToken,
  adminCredentials
} = require("../middleware/adminAuthMiddleware");

const {
  generateAccessToken,
  generateRefreshToken
} = require("../utils/jwt");

const Booking = require("../models/Booking");

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== adminCredentials.username)
      return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, adminCredentials.password);
    if (!match)
      return res.status(401).json({ error: "Invalid credentials" });

    const payload = { username, role: "Admin", userId: "admin-1" };

    return res.json({
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload)
    });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

router.post("/refresh-token", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "No refresh token" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ error: "Invalid refresh token" });

    const payload = {
      username: decoded.username,
      role: "Admin",
      userId: decoded.userId
    };

    return res.json({
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload)
    });
  });
});

router.get("/dashboard", verifyAdminToken, (req, res) => {
  res.json({ message: "Admin dashboard", admin: req.admin });
});


router.post("/booking", verifyAdminToken, async (req, res) => {
  try {
    const { villa, checkIn, checkOut, guests, specialRequest, notes } = req.body;

    if (!villa || !checkIn || !checkOut || !guests) {
      return res.status(400).json({
        error: "villa, checkIn, checkOut, and guests are required"
      });
    }
    const newBooking = await Booking.create({
      villa,
      checkIn,
      checkOut,
      guests,
      specialRequest,
      notes,
      createdBy: req.admin.username
    });

    return res.json({
      message: "Booking created successfully",
      booking: newBooking
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/booking", verifyAdminToken, async (req, res) => {
  try {
    let { page = 1, limit = 10, villa, date } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const query = {};

    if (villa) query.villa = villa;

    if (date) {
      query.$or = [
        { checkIn: date },
        { checkOut: date }
      ];
    }

    const totalRecords = await Booking.countDocuments(query);

    const bookings = await Booking.find(query)
      .sort({ createdAt: -1 })       
      .skip((page - 1) * limit)
      .limit(limit);

    return res.json({
      page,
      limit,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      data: bookings
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});


module.exports = router;
