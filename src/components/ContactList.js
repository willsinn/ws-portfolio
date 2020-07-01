import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static";

const ContactList = ({ orient }) => {
  const renderContacts = () => {
    const contacts = contactMethods();
    if (contacts && contacts.length > 0) {
      return contacts.map((contact) => (
        <Contact
          key={`${contact.method}-id`}
          contact={contact}
          orient={orient}
        />
      ));
    }
  };
  return (
    <>
      {orient === "vertical" ? (
        <ul className="col-1">{renderContacts()}</ul>
      ) : (
        <ul style={{ display: "flex" }}>{renderContacts()}</ul>
      )}
    </>
  );
};
export default ContactList;
