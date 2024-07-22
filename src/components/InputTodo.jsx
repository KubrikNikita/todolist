

export const InputTodo = ({todo, setTodo, addTask}) => {
    return (
        <>
            <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button className={"input__button"} onClick={() => addTask()}>Добавить</button>
        </>
    )
}