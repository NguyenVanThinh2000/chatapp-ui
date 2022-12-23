import { Button } from "antd";
import FormSendMessage from "../FormSendMessage";
import MessageList from "../MessageList";
import "./style.scss";

export interface IChatContainerProps {}

export default function ChatContainer(props: IChatContainerProps) {
  return (
    <div className="chat-container">
      <div className="header">
        <div className="roomName">Group Chat</div>

        <div className="button">
          <Button className="buttonItem buttonMessage active">Message</Button>
          <Button className="buttonItem buttonPaticipants">Participants</Button>
        </div>
      </div>
      <MessageList />
      <FormSendMessage />
    </div>
  );
}
