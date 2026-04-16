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
  const handleTodoDelete = (index)=>{
    const newTodoList = todoList.filter((item , i) => i !== index)
    setTodoList(newTodoList);
  };
  const handleTodoEdit = (index) => {
    const itemToEdit = todoList[index];
    setTodo(itemToEdit);
    const newTodoList = todoList.filter((item, i) => i !== index);
    setTodoList(newTodoList);
  };
  return<>
  <div>
    <form onSubmit={handleTodoList}>
      <div>
        <input type="text" name="todo" placeholder="Enter your task here! " onChange={handleTodoChange} value={todo}/>
      </div>
      <button>Submit</button>
    </form>

    {todoList.map((item , index)=>(
      <div key={index}>
        <div>ToDo:{item}</div>
        <div><button onClick={()=>handleTodoEdit(index)}>Edit</button></div>
        <div><button onClick={()=>handleTodoDelete(index)}>Delete</button></div>
      </div>
      
    ))}
  </div>
 </>
}

export default App;