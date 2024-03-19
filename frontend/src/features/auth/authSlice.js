import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authAPI';
import { updateUser } from '../user/userAPI';


const initialState = {
  loggedInUser: null,
  status: 'idle',
  error:null
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
        console.log("updateUserAsync2")
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        console.log("updateUserAsync2"+ action.payload)
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
        console.log("updateUserAsync2")
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        console.log("updateUserAsync2"+ action.payload)
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        console.log("updateUserAsync2"+ action.error)
        state.error = action.error;
      }) 
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
        console.log("updateUserAsync2")
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log("updateUserAsync2"+ action.payload)
        state.loggedInUser = action.payload;
      })
      
  },
});

export const selectLoggedInUser = (state)=>state.auth.loggedInUser;
export const selectError = (state)=>state.auth.error;

export const { increment } = counterSlice.actions;


export default counterSlice.reducer;