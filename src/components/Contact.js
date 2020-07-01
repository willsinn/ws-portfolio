import React from "react";
const Contact = ({ contact, orient }) => {
  return (
    <>
      {orient === "vertical" ? (
        <li className="contact-item">
          <div className="icon">
            <a href={`${contact.img_link}`}></a>
          </div>
          <span>{contact.method}</span>
        </li>
      ) : (
        <li className="contact-item" style={{ margin: "0 4px" }}>
          <div className="icon">
            <a href={`${contact.img_link}`}></a>
          </div>
        </li>
      )}
    </>
  );
};
export default Contact;
