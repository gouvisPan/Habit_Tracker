import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "../../model/Habit";
import User from "../../model/User";
import {
  createUser,
  loginUser,
  loginUserWithGoogle,
  logoutUser,
} from "../actions/user-actions";

interface userSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  isAuthenticated: boolean;
  error: null | string;
  data: null | any;
  token: null | string;
  
}

const initialState: userSliceState = {
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  error: null,
  data: null,
  token: null,

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    autoLoginUser: (state, action: PayloadAction<User | null>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isAuthenticated = true;
      state.data = action.payload;
    },
    clearErrorState: (state) => {
      state.error = null;
    },
    
  },
  //  while the useEffect on App.tsx handles auth state, those extra reducers ensure:
  //  a)That the Loading and Error states of the app are handled properly and
  //  b)That the app is scalable and ready to run with different backends
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loginUserWithGoogle.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isAuthenticated = true;
          state.data = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(
        loginUserWithGoogle.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, obj) => {
        state.isLoading = false;
        console.log(obj);
        state.data = null;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = false;
        state.data = null;
      })
      .addCase(logoutUser.rejected, (state, obj) => {
        state.isLoading = false;
        console.log(obj);
        state.data = null;
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice;
