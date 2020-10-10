import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Content from "./Content";

function ContactSelected() {
  const messages = useSelector((state) => state.messages.items);
  const searchMessage = useSelector((state) => state.application.searchMessage);

  const filterContact = messages.filter(
    (elem) =>
      elem.content.toUpperCase().indexOf(searchMessage.toUpperCase()) !== -1
  );

  useEffect(() => document.getElementById("bottom").scrollIntoView(false), []);

  return (
    <div className="scrol-messages">
      {filterContact.map((message) => {
        return <Content message={message} />;
      })}
      <div id="bottom" />
    </div>
  );
}

export default ContactSelected;
