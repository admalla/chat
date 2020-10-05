import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

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
        return <Contact key={contact._id} contact={contact} />
      })}
    </div>
  );
}

export default Contacts;
