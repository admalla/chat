import React from 'react';
import moment from "moment";
import DeleteMessage from "./DeleteMessage";
import {useDispatch, useSelector} from "react-redux";
import {setBtnDelete} from "../../redux/messages/action";

function RightSideMessage({ message }) {
  const dispatch = useDispatch();
  const button = useSelector(state => state.messages.btnDelete)

  function handleOnClick(id) {
    dispatch(setBtnDelete(id))
  }

  //**НЕ работает....
  const hideBtnDelete = () => {
    const btn = document.getElementById('btn');
    if(!btn) {
      btn.classList.add('hide')
    }
  }

  {document.getElementById('btn') && window.addEventListener('click', hideBtnDelete() )}
  //**

  const typeInfo = () => {
    if (!(message.type === "info")) {
      return (
        <div id="msg">
          <span id="font">{message.content}</span>
          <div className="time-read">
            <span className="time-message">
              {moment(message.time).format("HH:MM")}
            </span>
            <span className="read-icon">
              <span
                className="material-icons hide-icon"
                onClick={() => handleOnClick(message._id)}
              >
                keyboard_arrow_down
              </span>
              {message.read ? (
                <span className="material-icons done-icon">done_all</span>
              ) : (
                <span className="material-icons done-icon">done</span>
              )}
            </span>
            {(button === message._id) && <DeleteMessage message={message}/>}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="right-side">{typeInfo()}</div>
  );
}

export default RightSideMessage;