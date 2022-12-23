import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import Header from "../../../Header";
import Profile from "../Profile";
import Rooms from "../Rooms";
import "./style.scss";
interface ISideBarProps {}

const SideBar = (props: ISideBarProps) => {
  return (
    <div className="sidebar">
      <Header>
        <div className="app-title">
          <Button className="btn" icon={<MessageOutlined />} />
          <p>Chat Together</p>
        </div>
      </Header>
      <Profile />
      <Rooms />
    </div>
  );
};

export default SideBar;
