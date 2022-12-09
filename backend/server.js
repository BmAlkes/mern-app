const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || "4000";
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
