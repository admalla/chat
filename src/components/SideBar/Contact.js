import React from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingMessages from "../../redux/messages/action";
import moment from "moment";
import Avatar from "./Avatar";
import { useParams, useHistory } from "react-router-dom";

function Contact({ contact }) {
  const profile = useSelector((state) => state.profileContact.profile);
  const dispatch = useDispatch();
  const history = useHistory()
  const { id } = useParams()

  console.log(id)

  const handleClick = () => {
    if (contact.lastMessage) {
      dispatch(loadingMessages(profile._id, contact));
    }
    history.push(contact._id)
  };

  return (
    <div
      id="contact"
      className={id === contact._id && "selected"}
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
