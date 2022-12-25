import "./style.scss";

export interface IMessageProps {
    content: string;
    isUser?: boolean;
}

export default function Message({ content, isUser }: IMessageProps) {
    return (
        <div className={`message-wrapper ${isUser ? "message-user" : ""}`}>
            <div className={`message-content`}>{content}</div>
        </div>
    );
}
