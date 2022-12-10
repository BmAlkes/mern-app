import React from "react";
import { FaEdit, FaCheckDouble, FaTrash } from "react-icons/fa";

const Task = () => {
  return (
    <div className="task">
      <p>
        <b>1.</b>
        Task one
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" fontSize={20} />
        <FaEdit color="purple" fontSize={20} />
        <FaTrash color="red" fontSize={20} />
      </div>
    </div>
  );
};

export default Task;
