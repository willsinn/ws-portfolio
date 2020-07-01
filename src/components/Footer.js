import React from "react";
import ContactList from "./ContactList";

const Footer = () => {
  return (
    <div className="footer">
      <ContactList orient={"horizontal"} />
    </div>
  );
};

export default Footer;
