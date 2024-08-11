// itemsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Get, Post } from '../lib/apiWrapper'; // Import your API utility functions

// Define async thunk for fetching items
export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await Get('/posts');
  return response;
});

// Define async thunk for posting items
export const postItems = createAsyncThunk('items/postItems', async (data) => {
  const response = await Post('/posts', data);
  return response;
});

// Create a slice
const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
  
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
    
      .addCase(postItems.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default itemsSlice.reducer;
