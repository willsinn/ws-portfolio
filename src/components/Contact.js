import React from "react";
const Contact = ({ contact, orient }) => {
  const renderContact = () => {
    if (contact) {
      switch (contact.method) {
        case "linkedin":
          return (
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          );
        case "github":
          return (
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          );
        case "instagram":
          return (
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          );
        default:
          break;
      }
    }
  };

  return (
    <>
      {orient === "vertical" ? (
        <li className="contact-item">
          <div className="icon">{renderContact()}</div>
        </li>
      ) : null}
    </>
  );
};
export default Contact;
