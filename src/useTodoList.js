import {createSlice} from "@reduxjs/toolkit";

export const todoListSlice=createSlice({
    name:"todoList",
    initialState: {
        todos: [],
        nextId: 1
    },
    reducers:{
        addTodo:(state, action)=>{
            const {name}=action.payload;
            state.todos.push({name, id: state.nextId});
            state.nextId++;
        },
        removeTodo:(state, action)=>{
            const {id}=action.payload;
            const index=state.todos.findIndex(todo=>todo.id===id);
            if(index!== -1){
                state.todos.splice(index, 1)
            }
        },

        updateTodo(state, action){
            const {id, name}=action.payload;
            const todo=state.todos.find(todo=>todo.id===id);
            if(todo){
                todo.name=name
            }
        }
    },
    selectors:{
        getTodo(state, id){
            return state.todos.find(todo=>todo.id === id)
        }
    }
})

export const {addTodo, removeTodo, updateTodo}=todoListSlice.actions
export const {getTodo}=todoListSlice.selectors