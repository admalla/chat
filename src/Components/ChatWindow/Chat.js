import React from "react";
import SideBar from "../SideBar/SideBar";
import ChatWindow from "./ChatWindow";
import SideBarDetail from "../SideBarDetail/SideBarDetail";
import { useSelector } from "react-redux";

function Chat() {
  const loadContact = useSelector((state) => state.contacts.loadContact);

  return (
    <div className="body">
      <SideBar />
      {loadContact ? (
        <div className="please">
          <b>Please, select a chat to start messaging</b>
        </div>
      ) : (
        <div className="flx-blocks">
          <ChatWindow />
          <SideBarDetail />
        </div>
      )}
    </div>
  );
}

export default Chat;
