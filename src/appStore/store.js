import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import mainReducer from '../features/mainSlice'
const rootReducer = {
    todo: todoReducer,
    main: mainReducer
  };
  
  // Configure the store with the combined reducers
  export const store = configureStore({
    reducer: rootReducer
  });
