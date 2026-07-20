import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Trial } from './Components/Trial'
import Form from './Components/Form'
import { startAIStream } from './Components/Aichat'
import Try from './Components/Try'
import Nav from './Components/Nav'
import Section from './Components/Sectio'
import Heading from './Components/Heading'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );
}

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

    function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Trial /> 
      <Form />
      <startAIStream chatInput="Hello, AI!" />
      <Try />
      <Sectio />
      
    </>
  )
}

export default App
