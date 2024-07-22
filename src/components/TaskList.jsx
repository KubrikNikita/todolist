import {TaskTodo} from "./TaskTodo.jsx";
import {TodoList} from "./TodoList.jsx";


export const TaskList = ({tasks, deleteTask, toggleTask}) => {
    return (
        tasks.map(e => <TaskTodo id={e.id} value={e.value} status={e.status} deleteTask={deleteTask}
                                 toggleTask={toggleTask}/>)
    )
}