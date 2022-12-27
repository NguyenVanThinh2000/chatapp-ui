import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./style.scss";
import { IMessage } from "../../../../types";
import { RootState } from "../../../../store/store";
import { sendMessage } from "../../../../store/slices/messageSlice";
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
    const data: IMessage = {
      roomId: "1",
      sendBy: user,
      type: "text",
      content: message,
    };
    dispatch(sendMessage());
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
          className="buttonSend"
          icon={
            <SendOutlined
              style={{
                transform: "rotate(-45deg) translateX(2px) translateY(2px)",
              }}
            />
          }
        />
      </form>
    </div>
  );
}
