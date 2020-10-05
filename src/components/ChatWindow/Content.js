import React from "react";
import { useSelector } from "react-redux";
import LeftSideMessage from "./LeftSideMessage";
import RightSideMessage from "./RightSideMessage";

function Content({ message }) {
  const contactToHeader = useSelector((state) => state.messages.contactToHeader);

  return (
    <div>
      {message.fromUserId === contactToHeader._id ? (
        <LeftSideMessage message={message} contact={contactToHeader}/>
      ) : (
        <RightSideMessage message={message}/>
      )}
      {message.type === "info" && (
        <div className="center-side">{message.content}</div>
      )}
    </div>
  );
}

export default Content;
