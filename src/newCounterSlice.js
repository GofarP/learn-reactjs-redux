import {createSlice} from "@reduxjs/toolkit"

export const newCounterSlice=createSlice({
    name : 'newCounter',
    initialState:{
        angka:0,
        kata:"",
        isChecked:false
    },
    reducers:{
        increment:(state)=>{
            state.angka +=1;
        },
        decrement:(state)=>{
            state.angka -=1;
        },
        plusTwo:(state)=>{
            state.angka+=2
        },
        minTwo:(state)=>{
            state.angka-=2
        },
        kataKataHariIni:(state, action)=>{
            state.kata=action.payload
        },

        setChecked(state){
           state.isChecked=!state.isChecked
        },
        updateChecked(state, action){
            state.isChecked=action.payload
        }


    }
})

export const {increment, decrement, plusTwo, minTwo, kataKataHariIni, setChecked, updateChecked}=newCounterSlice.actions
export default newCounterSlice.reducer