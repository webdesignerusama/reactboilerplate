import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    list:[{id:1,text:'hello world'}]
}

export const mainSlice= createSlice({
    name:'Main',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
              const todo={
                id:nanoid(),
                text:action.payload
              }
              state.list.push(todo)
        },
        removeTodo:(state,action)=>{
            state.list=   state.list.filter(item=> item.id !== action.payload)
        },
        updateTodo:(state,action)=>{
           const itemToUpdate=  state.list.find(item=> item.id===action.payload.id)
                    itemToUpdate.text= action.payload.text
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=mainSlice.actions
export default mainSlice.reducer