import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTask from './AddTask';
import { Tasks as SampleTasks } from '../sampleData';

const Todo = () => {
  const [tasks, setTasks] = useState(SampleTasks);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); //Logic which is add the new Task
  };

  //Mark Done Logic
  const markAsDone = (id) => {
  const taskToUpdate = tasks.find((task) => task.id === id); // get the task first
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, done: true } : task
    )
  );
  alert(`Task "${taskToUpdate.todo}" marked as done`);
  };


//Delete Task Logic
const deleteTask = (id) => {
  const deleteTask = tasks.filter((task) => task.id !== id);
  setTasks(deleteTask);
}


  return (
    <div className="min-h-screen bg-[#F5F5DC] p-6">
      <AddTask onAdd={handleAddTask} />
      <TodoItem tasks={tasks} onMarkDone={markAsDone} onDeleteTask={deleteTask} />
    </div>
  );
};

export default Todo;
