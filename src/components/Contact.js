import React from "react";
const Contact = ({ contact }) => {
  return (
    <li className="contact-item">
      <div className="icon">
        <a href={`${contact.img_link}`}></a>
      </div>
      <span>{contact.method}</span>
    </li>
  );
};
export default Contact;
