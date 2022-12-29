import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
