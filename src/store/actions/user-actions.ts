import * as api from "../../api/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import SignUpCredentials from "../../model/interfaces/SignupCredentials";
import SignInCredentials from "../../model/interfaces/SignInCredentials";

export const createUser = createAsyncThunk(
  "user/signUp",
  async (credentials: SignUpCredentials, thunkApi) => {
    try {
      const response = await api.createUser(credentials);
      console.log(response);
      return response.user;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  async (_: void, thunkApi) => {
    try {
      const response = await api.signInGoogleUser();
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/signIn",
  async (credentials: SignInCredentials, thunkApi) => {
    try {
      const response = await api.signInUser(credentials);
      return response.user;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/signOut",
  async (_: void, thunkApi) => {
    try {
      const response = await api.signOutUser();

      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
