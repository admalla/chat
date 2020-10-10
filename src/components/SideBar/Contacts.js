import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import {Link} from "react-router-dom";

function Contacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchContact = useSelector((state) => state.application.searchContact);



  const filterContacts = contacts.filter(
    (elem) =>
      elem.fullname.toUpperCase().indexOf(searchContact.toUpperCase()) !== -1
  );

  return (
    <div className="contacts">
      {filterContacts.map((contact) => {
        return (
          <Link to={`/contacts/${contact.fullname}`}>
            <Contact key={contact._id} contact={contact} />
          </Link>
        )
      })}
    </div>
  );
}

export default Contacts;
