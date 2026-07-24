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
import Timer from './Components/review'

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

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
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
       <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      <Timer />
    </>
  )

  function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
  case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    
     case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
     default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

}

export default App;
