import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface IUserState {
  user: IUser;
}

const initialState: IUserState = {
  user: {
    id: "1",
    name: "Admin",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
