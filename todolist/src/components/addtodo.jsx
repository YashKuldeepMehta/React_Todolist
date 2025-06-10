import {useState} from 'react';
import '../addtask.css';
const Addtodo = ({addTodo})=>{
    const [task,setTask] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();
        if(task !==""){
            addTodo(task);
            setTask("");
        }
    }
    return(
        <>
        <div className='add-task'>
            <form onSubmit={HandleSubmit}>
            <input type="text" placeholder='Add a task' value={task} onChange={(e) => setTask(e.target.value) }></input>
            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Addtodo;