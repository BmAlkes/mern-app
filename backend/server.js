const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");

const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// function looger(req, res, next) {
//   console.log("middleware running");
//   console.log(req.method);
//   next();
// }

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.post("/api/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
// Get / Read Data
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

const PORT = process.env.PORT || "4000";
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
