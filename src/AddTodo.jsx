import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "./useTodoList";

export default function AddTodo() {
    const [name, setName]=useState('');
    const dispatch=useDispatch();
    const navigate =useNavigate();

    function handleAddTodo(){
        dispatch(addTodo({name:name}))
        navigate("/todolist")
    }

    return(
        <div>
            <h1>Add Todo</h1>
            <input type="text" placeholder="Enter Todo name" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
};
