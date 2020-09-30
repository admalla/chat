import React from 'react';
import {useSelector} from "react-redux";
import Content from "./Content";
import Preloader from "./PreLoader/preloader";

function ContactSelected() {
  const loadContact = (useSelector(state => state.contacts.loadContact));
  const messages = (useSelector(state => state.messages.items));
  const searchString = useSelector(state => state.messages.searchString);


  const filterContact = messages.filter((elem) => {
    return  elem.content.toUpperCase().indexOf(searchString.toUpperCase()) !== -1
  })


  setTimeout(document.location.href = '#bottom', 10)

  return (
      <div className='scrol-messages'>
        {loadContact ? <Preloader/> : (
          filterContact.map((item) => {
            return <Content item={item}/>
          })
          )}
        <div id='bottom'></div>
      </div>
  );
}

export default ContactSelected;
