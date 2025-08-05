import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, updateTodo } from "./useTodoList";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateTodo() {
    const params = useParams();
    const todo = useSelector((state) => getTodo(state, Number(params.id)));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    
    useEffect(() => {
        if (todo) {
            setName(todo.name)
        }
    }, [todo]);

    function handleUpdateTodo() {
        if (name.trim) {
            dispatch(updateTodo({ id: todo.id, name }));
        }
        dispatch(updateTodo({ id: todo.id, name: name }));
        navigate('/todolist')
    };

    if (!todo) return <p></p>

    return (
        <div>
            <h1>Edit Todo</h1>
            <input type="text" value={name} placeholder="Enter todo name"
                onChange={(e) => setName(e.target.value)} />
            <button onClick={handleUpdateTodo}>Update</button>
        </div>
    )

};
