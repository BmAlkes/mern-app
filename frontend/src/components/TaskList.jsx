import React from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm />
      <div className="--flex-between --pb">
        <p>
          <b>Total Task:</b>
        </p>
        <p>
          <b>Completed Task:</b>
        </p>
      </div>
      <hr />
      <Task />
    </div>
  );
};

export default TaskList;
