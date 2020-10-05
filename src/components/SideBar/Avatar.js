import React from 'react';

function Avatar({contact}) {
  return (
    <div className="avatar">
      {contact.picture || contact.fullname[0]}
      <span id={contact.online && "user-online"}></span>
    </div>
  );
}

export default Avatar;