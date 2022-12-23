import * as React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./style.scss";
import RoomCard from "../RoomCard";
export interface IRoomsProps {}

export default function Rooms(props: IRoomsProps) {
  return (
    <div className="rooms">
      <div className="head">
        <p className="title">Rooms</p>
        <Button className="btn" icon={<PlusOutlined />} />
      </div>
      <div className="list">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
}
