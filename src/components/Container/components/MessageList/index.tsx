import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { IMessage } from "../../../../types";
import Message from "../Message";
import "./style.scss";
export interface IMessageListProps {}

export default function MessageList(props: IMessageListProps) {
  const messageList = useSelector(
    (state: RootState) => state.message.messageList
  );
  const user = useSelector((state: RootState) => state.user.user);

  console.log(user);
  console.log(messageList);

  return (
    <div className="messageList">
      {messageList?.map(
        (message: IMessage, index: number) =>
          message.type === "text" && (
            <Message
              key={index}
              content={message.content || ""}
              isUser={user?.id === message.sendBy?.id}
            />
          )
      )}
    </div>
  );
}
