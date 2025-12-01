const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.USER_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Invalid or expired token" });

    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
