import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {InputTodo} from "./components/InputTodo.jsx";
import {TaskTodo} from "./components/TaskTodo.jsx";
import {useState} from "react";

function App() {
    const [todo, setTodo] = useState("")
    const [tasks, setTasks] = useState([])
    const addTask = () => {
        const taskTodo = {
            id: Math.random(),
            value: todo,
            status: false
        }
        let newTask = [taskTodo, ...tasks]
        setTasks(newTask)
        setTodo("")
    }
    const deleteTask = (id) => {
        let del = tasks.filter(e => e.id !== id)
        setTasks(del)
    }
    const toggleTask = (id) => {
        let toggle = tasks.map(e => e.id === id ? {...e, status : !e.status } : {...e})
        setTasks(toggle)
    }
const taskTodoList = tasks.map(e => <TaskTodo id={e.id} value={e.value} status={e.status} deleteTask={deleteTask} toggleTask={toggleTask} />)
    return (
        <div className="App">
          <InputTodo addTask={addTask} todo={todo} setTodo={setTodo} />
            {taskTodoList}
        </div>

    )
}

export default App
