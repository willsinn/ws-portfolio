import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static";

const ContactList = () => {
  const renderContacts = () => {
    const contacts = contactMethods();
    if (contacts && contacts.length > 0) {
      return contacts.map((contact) => (
        <Contact key={`${contact.method}-id`} contact={contact} content="" />
      ));
    }
  };
  return (
    <ul className="col-1" style={{ width: "30px" }}>
      {renderContacts()}
    </ul>
  );
};
export default ContactList;
