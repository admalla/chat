import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts() {
  const items = useSelector((state) => state.contacts.items);
  const searchString = useSelector(state => state.contacts.searchString);


  const filterContacts = items.filter((elem) => {
    return elem.fullname.toUpperCase().indexOf(searchString.toUpperCase()) !== -1
  })

  return (
    <div className='contacts'>
      {filterContacts.map((item) => {
          return (
            <div>
              <Contact key={item._id} item={item}/>
            </div>
          )
        })}
    </div>
  );
}

export default Contacts;
