import React from "react";
import "./style/inputMessage.css";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import "./style/animation.css";
import {
  sentContent,
  sentMessage,
  typeMessage,
} from "../../redux/messages/action";
import {
  setAnimationMic,
  setAnimationSend,
} from "../../redux/application/action";

function InputMessage() {
  const send = useSelector((state) => state.application.send);
  const mic = useSelector((state) => state.application.mic);
  const contactId = useSelector((state) => state.contacts.contact);
  const content = useSelector((state) => state.messages.content);
  const type = useSelector((state) => state.messages.type);
  const profile = useSelector((state) => state.contacts.profile);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(sentMessage(profile._id, contactId._id, content, type));
  };

  const handleChange = (e) => {
    dispatch(sentContent(e.target.value));
    dispatch(typeMessage(e.target.type));
    if (e.target.value.length > 0) {
      return dispatch(setAnimationSend());
    } else {
      dispatch(setAnimationMic());
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
        onKeyDown={handleKeyDown}
      />

      <span className="material-icons">attach_file</span>

      <SwitchTransition mode={mic}>
        <CSSTransition
          timeout={500}
        >
          <span className="material-icons mic">mic</span>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition mode={send}>
        <CSSTransition
          timeout={500}
        >
          <span className="material-icons send" onClick={handleOnClick}>
            send
          </span>
        </CSSTransition>
      </SwitchTransition>


    </div>
  );
}

export default InputMessage;
