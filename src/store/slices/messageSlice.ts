import { createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../types";
export interface IMessageState {
  messageList: IMessage[];
}

const initialState: IMessageState = {
  messageList: [
    {
      id: "1",
      roomId: "1",
      sendBy: {
        id: "2",
        name: "MeoMeo",
      },
      type: "text",
      content: "hello man",
      createAt: new Date(),
    },
  ],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    sendMessage: (state: IMessageState) => {
      return {
        ...state,
      };
    },
  },
});

export const { sendMessage } = messageSlice.actions;

export default messageSlice.reducer;
