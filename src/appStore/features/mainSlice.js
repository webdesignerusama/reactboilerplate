import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:'hello world'}]
}

export const mainSlice= createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            //   const todo={
            //     id:nanoid(),
            //     text:action.payload
            //   }
              state.todos.push(action.payload)
        },
        removeTodo:(state,action)=>{
            state.todos=   state.todos.filter(item=> item.id !== action.payload)
        },
        updateTodo:(state,action)=>{
           const itemToUpdate=  state.todos.find(item=> item.id===action.payload.id)
                    itemToUpdate.text= action.payload.text
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=mainSlice.actions
export default mainSlice.reducer