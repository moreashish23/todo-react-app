import React, { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [todo, setTodo] =  useState('');
    const [work, setWork] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    if(todo.trim() === '' || work.trim() === "") {
        alert("Please enter the valid data.");
        return;
    };

    const genId = Math.floor(Math.random() * 1000000) + 1;
    const newTask = {
       id: genId,
       todo,
       work,
       done: false
    };

    onAdd(newTask); //  Send data to App
    setTodo('');  //After take data field make empty
    setWork('');
    
}
  return (
    <div className=''>
        <form action="" onSubmit={handleSubmit} 
        className='flex flex-col sm:flex-row sm:gap-2 items-center justify-center m-4 px-2'>
            <input 
            type="text" 
            placeholder='Enter Title'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className='w-full sm:w-80 mb-2 sm:mb-0 border p-2 rounded'
             />

            <input 
            type="text" 
            placeholder='Enter Description'
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className='w-full sm:w-80 mb-2 sm:mb-0 border p-2 rounded'
             />

             <button type='submit' 
             className='w-full sm:w-auto bg-green-500 text-white border p-2 rounded' >Add Task</button>
        </form>
    </div>
  )
}

export default AddTask