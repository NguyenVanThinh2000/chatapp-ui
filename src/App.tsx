// import { io } from "socket.io-client";

import "./App.css";
import { Outlet } from "react-router-dom";

// const socket = io("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
