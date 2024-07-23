import "./TaskTodo.css"
export const TaskTodo = ({id, deleteTask, toggleTask, status, value}) => {
    return(
        <div key={id} className="TaskTodo">
            <input type={"checkbox"} onClick={() => toggleTask(id)} defaultChecked={status}></input>
            <p style={status ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{value}</p>
            <button className={"task__button"} onClick={() => deleteTask(id)}>x</button>
        </div>
    )
}