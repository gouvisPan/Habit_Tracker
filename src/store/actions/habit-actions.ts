import * as api from "../../api/HabitCrudService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Habit } from "../../model/Habit";
import FSHabits from "../../model/interfaces/FSHabits";
import { RootState } from "../reducers";

export const createHabitList = createAsyncThunk(
  "habits/create",
  async (habits: Habit[], thunkApi) => {
    try {
      const state = thunkApi.getState() as RootState;
      const uid: string = state.user.data?.uid!;

      const fsHabits: FSHabits = {
        habits,
        uid,
      };

      await api.createHabits(fsHabits);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchHabitList = createAsyncThunk(
  "habits/fetch",
  async (uid: string, thunkApi) => {
    try {
      const response = await api.fetchHabits(uid);

      if (response) return response!.habits;

      return undefined;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
