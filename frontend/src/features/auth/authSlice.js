import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authAPI';

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

export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo,{rejectWithValue}) => {
    try{
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
  catch(error){
    console.log(error);
    return rejectWithValue(error);
  }
  }
);
export const forgotPasswordAsync = createAsyncThunk(
  'user/forgotPassword',
  async (email,{rejectWithValue}) => {
    try{
    const response = await forgotPasswordAsync(email);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
  catch(error){
    console.log(error);
    return rejectWithValue(error);
  }
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(forgotPasswordAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(forgotPasswordAsync.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(forgotPasswordAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      });
  }
});

export const selectLoggedInUser = (state)=>state.auth.loggedInUser;
export const selectError = (state)=>state.auth.error;




export default authSlice.reducer;