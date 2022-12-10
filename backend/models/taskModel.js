const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a task"],
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
