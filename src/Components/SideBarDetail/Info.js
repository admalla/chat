import React from 'react';
import {useSelector} from "react-redux";

function Info() {
  const contact = useSelector(state => state.contacts.contact);

  return (
    <div className='info'>
      <div>
        <b>Social</b>
        <div className='social'>
          <div className='mails'>
            <span className="material-icons">
              mail
            </span>
            <span>{contact.username}</span>
          </div>
          <div className='mails'>
            <span className="material-icons">
              mail
            </span>
            <span>{contact.username}</span>
          </div>
          <div className='mails'>
            <span className="material-icons">
              mail
            </span>
            <span>{contact.username}</span>
          </div>
        </div>
      </div>
      <div className='media-info'>
        <div>
          <b>Media</b>
        </div>
        <div className='flx'>
          <div className='block'/>
          <div>
            desktop-chat.pdf
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;