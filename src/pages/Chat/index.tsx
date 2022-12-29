import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";

const Chat = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return <div>Chat</div>;
};

export default Chat;
