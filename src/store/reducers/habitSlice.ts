import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "../../model/Habit";
import AddHabit from "../../pages/Home/AddHabit/AddHabit";
import {
  setHabitList,
  fetchHabitList,
  updateHabitList,
  addHabit,
  renewWeeklyState,
} from "../actions/habit-actions";

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
  habitList: [],
  habitListHistory: null,
};

const habitSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorState: (state) => {
      state.error = null;
    },
    updateHabitList: (state, action: PayloadAction<Habit[] | null>) => {
      state.habitList = action.payload;
    },
    updateHabit: (state, action: PayloadAction<Habit>) => {
      if (state.habitList) {
        const i = state.habitList.findIndex((h) => h.id === action.payload.id);
        state.habitList[i] = action.payload;
      }
    },
    clearHabits: (state) => {
      state.habitList = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setHabitList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setHabitList.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(setHabitList.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      })
      .addCase(updateHabitList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        updateHabitList.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.habitList = action.payload;
        }
      )
      .addCase(
        updateHabitList.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(addHabit.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addHabit.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.habitList = action.payload;
      })
      .addCase(addHabit.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(renewWeeklyState.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        renewWeeklyState.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.habitList = action.payload;
        }
      )
      .addCase(
        renewWeeklyState.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const habitActions = habitSlice.actions;

export default habitSlice;
