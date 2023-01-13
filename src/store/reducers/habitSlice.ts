import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "../../model/Habit";
import AddHabit from "../../pages/Home/AddHabit/AddHabit";
import { createHabitList, fetchHabitList } from "../actions/habit-actions";

interface habitSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  error: null | string;
  habitList: null | Habit[];
  habitListHistory: null | Habit[];
}

const initialState: habitSliceState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  habitList: null,
  habitListHistory: null,
};

const habitSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorState: (state) => {
      state.error = null;
    },
    updateHabitList: (state, action: PayloadAction<Habit[]>) => {
      state.habitList = action.payload;
    },
    updateHabit: (state, action: PayloadAction<Habit>) => {
      if (state.habitList) {
        const i = state.habitList.findIndex((h) => h.id === action.payload.id);
        state.habitList[i] = action.payload;
      }
    },
    addHabit: (state, action: PayloadAction<Habit>) => {
      if (state.habitList) {
        state.habitList!.push(action.payload);
      } else {
        state.habitList = [action.payload];
      }
    },
    removeHabit: (state, action: PayloadAction<string>) => {
      if (state.habitList?.filter((h) => h.id !== action.payload)) {
        state.habitList = state.habitList?.filter(
          (h) => h.id !== action.payload
        );
        if (state.habitList.length === 0) state.habitList = null;
      }
    },
    clearHabits: (state) => {
      state.habitList = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createHabitList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        createHabitList.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
        }
      )
      .addCase(
        createHabitList.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(fetchHabitList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchHabitList.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.habitList = action.payload;
        }
      )
      .addCase(fetchHabitList.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const habitActions = habitSlice.actions;

export default habitSlice;
