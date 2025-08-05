// src/features/todos/ListTodo.jsx
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./useTodoList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListTodo() {
  const todos = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addTodo({ name }));
      setName("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter todo"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>
                <button onClick={()=>navigate(`/todolist/${todo.id}/edit`)}>Edit</button>
                <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
