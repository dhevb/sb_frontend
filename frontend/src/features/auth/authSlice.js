import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authAPI';
import { updateUser } from '../user/userAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null
};

// Thunks for async operations
export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    return response.data;
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    // Here, you can add any logout-related operations, such as clearing local storage, etc.
    // For now, let's assume we just reset the loggedInUser state to null
   
    return null;
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
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      // Handle logout action
      .addCase(logout.fulfilled, (state) => {
        state.loggedInUser = null; // Reset loggedInUser to null on successful logout
      });
  },
});

export const selectLoggedInUser = (state)=>state.auth.loggedInUser;
export const selectError = (state)=>state.auth.error;

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
