import React from "react";
import { useState } from "react";

const App = ()=>{
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTodoChange = (e)=>{
    setTodo(e.target.value);
  }

  const handleTodoList=(e)=>{
    e.preventDefault();
    setTodoList([...todoList,todo]);
    setTodo("");
  }

  return<>
  <div>
    <form onSubmit={handleTodoList}>
      <div>
        <input type="text" name="todo" placeholder="Enter your task here! " onChange={handleTodoChange} value={todo}/>
      </div>
      <button>Submit</button>
    </form>

    {todoList.map((item)=>(
      <div>
        <div>ToDo:{item}</div>
        <div><button>Edit</button></div>
        <div><button>Submit</button></div>
      </div>
      
    ))}
  </div>
 </>
}

export default App;