import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Todo from './components/Todo'

function App() {


  return (
    <div className='bg-[#FFE5B4]'>
      <Navbar />
      <Todo />
    </div>
  )
}

export default App
