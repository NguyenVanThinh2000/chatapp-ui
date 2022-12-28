import { createSlice } from "@reduxjs/toolkit";
import { IRoom } from "./../../types/index";

export interface IMessageState {
  room?: IRoom;
  rooms: IRoom[];
}

const initialState: IMessageState = {
  room: {
    id: "1",
    name: "Room 1",
    members: [
      { id: "1", name: "Admin" },
      { id: "2", name: "MeoMeo" },
    ],
  },
  rooms: [
    {
      id: "1",
      name: "Room 1",
      members: [
        { id: "1", name: "Admin" },
        { id: "2", name: "MeoMeo" },
      ],
    },
    {
      id: "2",
      name: "Room 2",
      members: [
        { id: "1", name: "Admin" },
        { id: "3", name: "Milo" },
      ],
    },
  ],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
});

// export const {} = roomSlice.actions;

export default roomSlice.reducer;
