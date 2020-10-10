import React from "react";
import "./App.css";
import SideBar from "./SideBar/SideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import SideBarDetail from "./SideBarDetail/SideBarDetail";
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="body">
        <SideBar />
        <ChatWindow />
        <SideBarDetail />
      </div>
    </BrowserRouter>
  );
}

export default App;
