import React from "react";
import Search from "./Search";
import ContactSelected from "./ContactSelected";
import "./style/chatWindow.css";
import InputMessage from "./InputMessage";
import {useSelector} from "react-redux";



function ChatWindow() {
  const loading = useSelector(state => state.messages.loading);

  console.log(document.getElementById('q'))

  return (
    <div id='q' className="chatWindow">
      {loading ? (
        <div className="please">
          <b>Please, select a chat to start messaging</b>
        </div>
      ) : (
        <div>
          <Search />
          <ContactSelected />
          <InputMessage />
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
