import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:[]
}

export const todoSlice= createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            //   const todo={
            //     id:nanoid(),
            //     text:action.payload
            //   }
              state.todos=action.payload
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

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer