import { io } from "socket.io-client";
import "./App.css";
import Container from "./components/Container";
import SideBar from "./components/Container/components/SideBar";

const socket = io("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
