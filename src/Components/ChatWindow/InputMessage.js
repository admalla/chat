import React from "react";
import "./Style/inputMessage.css";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import initialAnimation, { backMic } from "../../Redux/Animation/action";
import "./Style/animation.css";
import {
  sentContent,
  sentMessage,
  typeMessage,
} from "../../Redux/ChatWindow/action";

function InputMessage() {
  const send = useSelector((state) => state.animation.send);
  const mic = useSelector((state) => state.animation.mic);
  const contactId = useSelector((state) => state.contacts.contact);
  const content = useSelector((state) => state.messages.content);
  const type = useSelector((state) => state.messages.type);
  const profile = useSelector((state) => state.contacts.profile);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(sentMessage(profile._id, contactId._id, content, type));
  };

  console.log(handleOnClick());

  const handleChange = (e) => {
    dispatch(sentContent(e.target.value));
    dispatch(typeMessage(e.target.type));
    if (e.target.value.length > 0) {
      return dispatch(initialAnimation());
    } else {
      dispatch(backMic());
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(sentMessage(profile._id, contactId._id, content, type));
    }
  };

  return (
    <div className="input">
      <input
        placeholder="Write a message"
        type="text"
        value={content}
        onChange={handleChange}
        onKeyDown={() => {
          if (content.length > 0) {
            return handleKeyDown;
          }
        }}
      />

      <span className="material-icons">attach_file</span>

      <CSSTransition in={mic} timeout={200} unmountOnExit classNames="my-mic">
        <span className="material-icons">mic</span>
      </CSSTransition>

      <CSSTransition
        in={send}
        timeout={200}
        classNames="my-style"
        unmountOnExit
      >
        <span className="material-icons send-animation" onClick={handleOnClick}>
          send
        </span>
      </CSSTransition>
    </div>
  );
}

export default InputMessage;
