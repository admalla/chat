import React from "react";
import "./App.css";
import SideBar from "./SideBar/SideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import SideBarDetail from "./SideBarDetail/SideBarDetail";
import  { Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Route path="/:id?">
        <SideBar />
        <ChatWindow />
        <SideBarDetail />
      </Route>
    </BrowserRouter>
  );
}

export default App;
