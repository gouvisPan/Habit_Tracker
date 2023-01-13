import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "../../model/Habit";
import User from "../../model/User";
import { createUser, fetchUser } from "../actions/user-actions";

interface userSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  error: null | string;
  data: null | User;
  token: null | string;
}

const initialState: userSliceState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  data: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    autoLoginUser: (state, action: PayloadAction<User | null>) => {
      state.data = action.payload;
    },
    clearErrorState: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, obj) => {
        state.isLoading = false;
        console.log(obj);
        state.data = null;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, obj) => {
        state.isLoading = false;
        console.log(obj);
        state.data = null;
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice;
