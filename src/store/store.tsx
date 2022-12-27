import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import userReducer from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
