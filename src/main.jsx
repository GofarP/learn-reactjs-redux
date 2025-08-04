// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice.js';
import { newCounterSlice } from './newCounterSlice.js';
import { todoListSlice } from './useTodoList.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Counter from './Counter.jsx';
import NewCounter from './NewCounter.jsx';
import AddTodo from './AddTodo.jsx';
import ListTodo from './ListTodo.jsx';
import UpdateTodo from './UpdateTodo.jsx';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    newCounter: newCounterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/counter" element={<><Counter /><Counter /></>} />
          <Route path="/newcounter" element={<NewCounter />} />
          <Route path="/todolist" element={<ListTodo />} />
          <Route path="/todolist/add" element={<AddTodo />} />
          <Route path="/todolist/:id/edit" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
