import React from 'react';
import {useSelector} from "react-redux";

function ContactMenu({item}) {
  const contact = useSelector(state => state.contacts.contact);

  return (
    <div id='ava-nik'>
      <div className='ava-detail'>
          {contact.picture || contact.fullname[0]}
      </div>
      <div id='nik'>
        <b>{contact.fullname}</b>
      </div>
      <div id='user-name'>
        @{contact.username}
      </div>
      <div id='social'>
        <span className="material-icons">
          call
        </span>
        <span id='mar-around' className="material-icons">
          videocam
        </span>
        <span className="material-icons">
          mail
        </span>
      </div>
    </div>


  );
}

export default ContactMenu;