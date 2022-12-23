import { UserOutlined } from "@ant-design/icons";
import "./style.scss";
export interface IRoomCardProps {}

export default function RoomCard(props: IRoomCardProps) {
  return (
    <div className="roomCard">
      <div className="avatar">
        <UserOutlined />
      </div>
      <div className="content">
        <div className="status">
          <p className="name">Real estate deals</p>
          <p className="last_message">
            I will send the document for you at tomorrow
          </p>
        </div>
        <div className="time">11:15</div>
      </div>
    </div>
  );
}
