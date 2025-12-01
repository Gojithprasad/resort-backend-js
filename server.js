const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const allowedOrigins = process.env.CORS_ORIGINS.split(",");

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.once("connected", () => console.log("DB Connected"));
mongoose.connection.on("error", (err) => console.log("DB Error:", err));

app.get("/status", async (req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting"
  };
  res.status(200).json({ server: "ok", database: states[dbState] || "unknown"});
});


app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
