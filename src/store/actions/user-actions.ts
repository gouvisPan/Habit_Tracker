import * as api from "../../api/UserCrudService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import User from "../../model/User";
import { normalizeUser } from "../../helpers/normalizeUser";

export const createUser = createAsyncThunk(
  "user/create",
  async (user: User, thunkApi) => {
    try {
      const response = await api.createUser(user);
      console.log(response);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (uid: string, thunkApi) => {
    try {
      const fetchedUser = await api.fetchUser(uid);
      console.log(fetchedUser);
      const nUser = normalizeUser(fetchedUser);

      return nUser;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
