import * as React from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./style.scss";
export interface IFormSendMessageProps {}

export default function FormSendMessage(props: IFormSendMessageProps) {
  return (
    <div className="FormSendMessage">
      <form className="FormSend">
        <input
          type="text"
          className="inputMessage"
          placeholder="Write your message..."
        />
        <Button
          className="buttonSend"
          icon={
            <SendOutlined
              style={{ transform: "rotate(-45deg) translateX(3px)" }}
            />
          }
        />
      </form>
    </div>
  );
}
