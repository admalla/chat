import React from 'react';

function LeftSideMessage({ message, contact }) {

  return (
    <div className="left-side">
      <div className="mini-avatar">
        {contact.picture || contact.fullname[0]}
      </div>
      <div className="message-left">{message.content}</div>
    </div>
  );
}

export default LeftSideMessage;