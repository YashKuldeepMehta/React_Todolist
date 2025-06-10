import logo from './logo.svg';
import './App.css';
import Addtodo from './components/addtodo';
import TodoList from './components/todolist';
import { useEffect,useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const storedtodos = JSON.parse(localStorage.getItem("todos")) || []
    setTodos(storedtodos);
  },[])


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  })

  const addTodo = (task) => {
    const newtodos = [...todos, {task, completed: false}]
    setTodos(newtodos);
  }

  const deleteTodo = (index) => {
    const newtodos = todos.filter((_,ind) => ind !== index )
    setTodos(newtodos)
  }

  const toggleTodo = (index) =>{
    const newtodos = todos.map((todo,ind) =>{
      if(ind === index){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTodos(newtodos);
  }

  return (
    <div className="App">
     <Addtodo addTodo={addTodo} />
     <TodoList todos={todos} deleteTodo = {deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
