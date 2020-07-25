import React from "react";
const Contact = ({ contact, orient }) => {
  return (
    <>
      {orient === "vertical" ? (
        <li className="contact-item">
          <div className="icon">
            <span></span>
          </div>
        </li>
      ) : (
        <li className="contact-item" style={{ margin: "0 4px" }}>
          <div className="icon">
            <span></span>
          </div>
        </li>
      )}
    </>
  );
};
export default Contact;
