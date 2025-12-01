const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Booking = require("../models/Booking");
const verifyToken = require("../middleware/authMiddleware");

router.post("/register", async (req, res) => {
  try {
    const { username, name, gender, age, email, phone, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      name,
      gender,
      age,
      email,
      phone,
      password: hashed,
      role: "User"
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user)
    return res.status(401).json({ error: "User does not exist" });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign(
    {
      userId: user._id,
      username: user.username,
      role: user.role
    },
    process.env.USER_TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    status: true,
    message: "login success",
    token,
    userId: user._id,
    role: user.role
  });
});

router.post("/booking", verifyToken, async (req, res) => {
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
      createdBy: req.user.username
    });

    return res.json({
      message: "Booking created successfully",
      booking: newBooking
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/booking", verifyToken, async (req, res) => {
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
