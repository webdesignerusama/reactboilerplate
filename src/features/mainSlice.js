// itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { Get, Post } from '../lib/apiWrapper'; // Import your API utility functions

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    getItems: (state) => {
      return new Promise((resolve, reject) => {
        Get('/posts')
          .then((res) => {
            // state.items = res; 
            resolve(res);
          })
          .catch((err) => {
            // state.error = err.message; 
            reject(err);
          });
      });
    },
    postItems: (state, action) => {
      return new Promise((resolve, reject) => {
        Post('/posts', action.payload)
          .then((res) => {
            state.items.push(res); // Add the new item to the state
            resolve(res);
          })
          .catch((err) => {
            state.error = err.message; // Store the error in the state
            reject(err);
          });
      });
    },
  },
});

export const { getItems, postItems } = itemsSlice.actions;
export default itemsSlice.reducer;
