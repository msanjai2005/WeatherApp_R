import { useState } from "react";

function Todo(){
    const [todo,setTodo]=useState("");
    const [todolist,setTodolist]=useState([]);

    const addTodo = () =>{
        if(todo.trim()==="") return;
        setTodolist([...todolist,{id:Date.now(), text:todo, completed:false }]);
        setTodo('');
    }
    const deleteList = (id) => {
        setTodolist(todolist.filter((item)=>item.id!=id))
    }
    const toggle_strick = (id) =>{
        const updatedList = todolist.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setTodolist(updatedList);
    }
    return(
        <div className="List-container">
            <h1>To-Do List App</h1>
            <div className="input">
                <input 
                    type="text"
                    placeholder="Enter the new task..."
                    value={todo}
                    onChange={(e)=> setTodo(e.target.value)} 
                />
                <button onClick={()=> addTodo() }>Add</button>
            </div>
            <ul className="list">
                {todolist.map((item) => (
                    
                    <li
                        key={item.id}
                        onClick={()=>toggle_strick(item.id)}
                        >
                        <input type="checkbox" />
                        <span  style={{
                            cursor : 'pointer',
                            textDecoration : item.completed ? 'line-through' : 'none',
                            color: item.completed ? 'gray' : 'black'
                         }}>{item.text} </span>
                        <button onClick={(e)=>{
                            e.stopPropagation();
                            deleteList(item.id)}}>Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo