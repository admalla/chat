import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import DeleteMessage from "./DeleteMessage";

function Content({ item }) {
  const contact = useSelector((state) => state.contacts.contact);

  function handleOnClick() {
    if (item._id) {
      return <DeleteMessage />;
    }
  }
  console.log(handleOnClick());

  const typeInfo = () => {
    if (!(item.type === "info")) {
      return (
        <div id="msg">
          <span id="font">{item.content}</span>
          <div className="time-read">
            <span className="time-message">
              {moment(item.time).format("HH:MM")}
            </span>
            <span className="read-icon">
              <span
                className="material-icons hide-icon"
                onClick={handleOnClick}
              >
                keyboard_arrow_down
              </span>
              {item.read ? (
                <span className="material-icons done-icon">done_all</span>
              ) : (
                <span className="material-icons done-icon">done</span>
              )}
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {item.fromUserId === contact._id ? (
        <div className="left-side">
          {
            <div className="mini-avatar">
              {contact.picture || contact.fullname[0]}
            </div>
          }
          <div className="message-left">{item.content}</div>
        </div>
      ) : (
        <div className="right-side">{typeInfo()}</div>
      )}
      {item.type === "info" && (
        <div className="center-side">{item.content}</div>
      )}
    </div>
  );
}

export default Content;
