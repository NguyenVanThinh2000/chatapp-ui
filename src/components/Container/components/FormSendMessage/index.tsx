import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./style.scss";
import { IMessage } from "../../../../types";
import { RootState } from "../../../../store/store";
import { sendMessage } from "../../../../store/slices/messageSlice";
import dayjs from "dayjs";
export interface IFormSendMessageProps {}

export default function FormSendMessage(props: IFormSendMessageProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const [message, setMessage] = useState<string>("");

  const handleSetMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const data: IMessage = {
        id: "1",
        roomId: "1",
        sendBy: user,
        type: "text",
        content: message.trim(),
        timestamp: dayjs(new Date()).valueOf(),
      };
      dispatch(sendMessage(data));
    }
    setMessage("");
  };
  return (
    <div className="FormSendMessage">
      <form className="FormSend" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="inputMessage"
          placeholder="Write your message..."
          value={message}
          onChange={handleSetMessage}
        />
        <Button
          onClick={handleSendMessage}
          className="buttonSend"
          icon={
            <SendOutlined
              style={{
                transform: "rotate(-45deg) translateX(2px) translateY(1px)",
              }}
            />
          }
        />
      </form>
    </div>
  );
}
