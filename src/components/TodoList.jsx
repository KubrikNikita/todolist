import {TaskTodo} from "./TaskTodo.jsx";
import {useState} from "react";
import {InputTodo} from "./InputTodo.jsx";
import {TaskList} from "./TaskList.jsx";

export const TodoList = () => {
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
        let toggle = tasks.map(e => e.id === id ? {...e, status: !e.status} : {...e})
        setTasks(toggle)
    }

    return (
        <>
            <InputTodo addTask={addTask} todo={todo} setTodo={setTodo}></InputTodo>
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}></TaskList>
        </>
    )
}
export default TodoList

