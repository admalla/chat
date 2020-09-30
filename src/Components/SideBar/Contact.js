import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inContact, setColorContact } from "../../Redux/SideBar/action";
import loadingMessages from "../../Redux/ChatWindow/action";
import moment from "moment";

function Contact({ item }) {
  const color = useSelector((state) => state.contacts.colorContact);
  const myId = useSelector(state => state.contacts.profile);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (item.lastMessage) {
      dispatch(inContact(item));
      dispatch(loadingMessages(myId._id, item._id));
      dispatch(setColorContact(item._id));
    }
  };

  const last = () => {
    if (item.lastMessage) {
      return item.lastMessage.content.slice(0, 19) + '...';
    }
  };

  const userTime = () => {
    if (item.lastMessage) {
      return item.lastMessage.time;
    }
  };

  const time = moment(userTime()).format("HH:MM");

  return (
      <div
        id="contact"
        className={(color === item._id) && "selected"}
        onClick={handleClick}
      >
        <div className="avatar">
          {item.picture || item.fullname[0]}
          <span id={item.online && "user-online"}></span>
        </div>
        <div>
          <div className="item-name">
            <b>{item.fullname}</b>
          </div>
          <div className="last-message">{last()}</div>
        </div>
        <div id="clock">{time}</div>
        <div>
          <span className="material-icons icon-more">more_horiz</span>
        </div>
      </div>
  );
}

export default Contact;
