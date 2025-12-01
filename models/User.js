const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  gender: { type: String },
  age: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  password: { type: String, required: true },
  role: { type: String, default: "User" },
  messages: { type: [String], default: [] }
});

module.exports = mongoose.model("User", userSchema);
