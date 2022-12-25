import * as React from "react";
import Message from "../Message";
import "./style.scss";
export interface IMessageListProps {}

export default function MessageList(props: IMessageListProps) {
    return (
        <div className="messageList">
            <Message content="hello" isUser={true} />
            <Message content="hi" />
            <Message content="hello" isUser={true} />
            <Message content="hi" />
            <Message content="hello" isUser={true} />
            <Message content="hi" />
            <Message content="hello" isUser={true} />
            <Message content="hi" />
            <Message content="hello" isUser={true} />
            <Message content="hi" />
            <Message content="hello" isUser={true} />
            <Message content="hi" />
            <Message content="hello" isUser={true} />
            <Message content="hi" />
        </div>
    );
}
