import "./TaskTodo.css"
export const TaskTodo = (props) => {
    return(
        <div key={props.id} className="TaskTodo">
            <input type={"checkbox"} onClick={() => props.toggleTask(props.id)} defaultChecked={props.status}></input>
            <p style={props.status ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.value}</p>
            <button className={"task__button"} onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
    )
}