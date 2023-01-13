import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore, persistCombineReducers } from "redux-persist";
import userSlice from "./userSlice";
import uiSlice from "./ui-slice";
import habitSlice from "./habitSlice";
import authSlice from "./authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const userReducer = {
  user: userSlice.reducer,
  ui: uiSlice.reducer,
  habits: habitSlice.reducer,
  auth: authSlice.reducer,
};

const persistedReducer = persistCombineReducers(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        serializableCheck: false,
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
