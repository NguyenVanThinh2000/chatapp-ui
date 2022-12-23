import * as React from "react";
import ChatContainer from "./components/ChatContainer";
import SideBar from "./components/SideBar";

import "./style.scss";

export interface IContainerProps {}

export default function Container(props: IContainerProps) {
  return (
    <div className="container">
      <div className="wrapper">
        <SideBar />
        <ChatContainer />
      </div>
    </div>
  );
}
