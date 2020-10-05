import React from "react";
import "./App.css";
import SideBar from "./SideBar/SideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import SideBarDetail from "./SideBarDetail/SideBarDetail";

function App() {

  return (
    <div className="body">
      <SideBar />
      <ChatWindow />
      <SideBarDetail />
    </div>
  );
}

export default App;
