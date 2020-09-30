import React from "react";
import Search from "./Search";
import ContactSelected from "./ContactSelected";
import "./Style/chatWindow.css";
import InputMessage from "./InputMessage";

function ChatWindow() {
  return (
    <div className="chatWindow">
      <Search />
      <ContactSelected />
      <InputMessage />
    </div>
  );
}

export default ChatWindow;
