const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
} = require("../Controllers/taskController");

const router = express.Router();

router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);

module.exports = router;
