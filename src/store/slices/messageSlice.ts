import dayjs from "dayjs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      timestamp: dayjs("2022/12/28 09:00").valueOf(),
    },
  ],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    sendMessage: (state: IMessageState, action: PayloadAction<IMessage>) => {
      let newList = [...state.messageList];
      newList.unshift(action.payload);
      return {
        ...state,
        messageList: newList,
      };
    },
  },
});

export const { sendMessage } = messageSlice.actions;

export default messageSlice.reducer;
