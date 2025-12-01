const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyAdminToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Invalid or expired token" });

    if (decoded.role !== "Admin")
      return res.status(403).json({ error: "Access denied—Admin only" });

    req.admin = decoded;
    next();
  });
}

const adminCredentials = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD_HASH
};

module.exports = { verifyAdminToken, adminCredentials };
