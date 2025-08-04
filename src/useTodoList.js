// src/useTodoList.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  nextId: 1,
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { name } = action.payload;
      state.todos.push({ id: state.nextId, name });
      state.nextId++;
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const { id, name } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.name = name;
      }
    },
  },
});

// Action creators
export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;

// Selector manual
export const getTodo = (state, id) =>
  state.todoList.todos.find(todo => todo.id === id);

