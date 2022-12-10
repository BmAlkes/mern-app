const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task.routes");

const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/tasks", taskRoutes);
// function looger(req, res, next) {
//   console.log("middleware running");
//   console.log(req.method);
//   next();
// }

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || "4000";
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
