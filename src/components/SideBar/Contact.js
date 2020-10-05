import React from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingMessages from "../../redux/messages/action";
import moment from "moment";
import Avatar from "./Avatar";

function Contact({ contact }) {
  const opened = useSelector((state) => state.messages.opened);
  const profile = useSelector((state) => state.profileContact.profile);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (contact.lastMessage) {
      dispatch(loadingMessages(profile._id, contact));
    }
  };

  return (
    <div
      id="contact"
      className={opened === contact._id && "selected"}
      onClick={handleClick}
    >
      <Avatar contact={contact} />
      <div>
        <div className="item-name">
          <b>{contact.fullname}</b>
        </div>
        <div className="last-message">
          {contact.lastMessage?.content.slice(0, 19) + "..."}
        </div>
      </div>
      <div id="clock">{moment(contact.lastMessage?.time).format("HH:MM")}</div>
      <div>
        <span className="material-icons icon-more">more_horiz</span>
      </div>
    </div>
  );
}

export default Contact;
