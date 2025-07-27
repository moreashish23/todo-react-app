import React from 'react';
import { FaThumbsUp, FaCheckCircle, FaTrash } from 'react-icons/fa';

const TodoItem = ({ tasks, onMarkDone, onDeleteTask }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {tasks.length === 0 ? "Add the task" :  // This line give message when we delete all the tasks 
      tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#FFDEAD] flex flex-col justify-between w-64 h-auto p-3 shadow-md rounded-md"
        >
          <div>
            <div className="font-semibold text-lg flex justify-between">
              <h3>{task.todo}</h3>
              {task.done && <FaThumbsUp className="text-green-500" />}
            </div>
            <p className="text-sm text-gray-600">{task.work}</p>
          </div>
          <div className="flex justify-between mt-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => onDeleteTask(task.id)}>
              <FaTrash />
            </button>
            <button
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              onClick={() => onMarkDone(task.id)}
              disabled={task.done}
            >
              <FaCheckCircle />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
