const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTasks } = require("../Controllers/taskController");

const router = express.Router();

router.post("/api/tasks", createTask);

router.get("/api/tasks", getTasks);
module.exports = router;
