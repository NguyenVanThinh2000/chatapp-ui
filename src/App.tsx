import { io } from "socket.io-client";

import React, { useEffect, useState } from "react";
import "./App.css";

const socket = io("http://localhost:3001");

interface IMessage {
  name: string;
  message: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<IMessage[]>([]);
  useEffect(() => {
    setName(prompt("Enter your name") || "default");
  }, []);
  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessageList([...messageList, data.data]);
    });
  }, [messageList]);
  const handleSendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data: IMessage = {
      name,
      message,
    };
    socket.emit("send-message", {
      data,
    });

    setMessage("");
  };
  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  return (
    <div className="App">
      <ul>
        {messageList.map((mes: IMessage, index) => (
          <li key={index}>
            {mes.name}: {mes.message}
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleSendMessage}>
        <input
          onChange={handleChangeMessage}
          type="text"
          placeholder="Enter your message..."
          value={message}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default App;
