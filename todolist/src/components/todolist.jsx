import '../todolist.css';
const TodoList = ({todos,deleteTodo,toggleTodo})=>{

    return(
        <>
        <div className='todo-list'>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo,index)=>{
                    return (<li key={index}>
                        <p style={{textDecoration : todo.completed ? "line-through" : ""}}>{todo.task}</p>
                        <div style={{display:"flex",gap:10}}>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                        <button onClick={() => toggleTodo(index)}>Toggle</button>
                        </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default TodoList;