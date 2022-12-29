import ChatContainer from "./components/ChatContainer";
import SideBar from "./components/SideBar";

import "./style.scss";

export interface IContainerProps {}

export default function Container(props: IContainerProps) {
  return (
    <div className="chat-wrapper">
      <SideBar />
      <ChatContainer />
    </div>
  );
}
