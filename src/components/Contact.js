import React, { useState } from "react";
const Contact = ({ contact, orient }) => {
  const [popup, setPopup] = useState(false);
  const emailClipboard = (
    <div className="popover">
      <div className="clipboard" onClick={(e) => copyToClipboard(e)}>
        <textarea className="clip-text" value={contact.link}>
          {contact.link}
        </textarea>
        <i className="fa fa-clipboard" aria-hidden="true"></i>
      </div>
    </div>
  );
  const copyToClipboard = (e) => {
    if (e) {
      const elem = e.target.firstElementChild;
      elem.select();
      document.execCommand("copy");
    }
  };
  const renderContact = () => {
    if (contact) {
      switch (contact.method) {
        case "email":
          return (
            <span
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "rgb(23, 42, 69)",
                position: "relative",
              }}
            >
              {popup ? emailClipboard : null}
              <i
                className="fa fa-envelope"
                aria-hidden="true"
                onClick={(e) => handleEmailClick(e)}
              ></i>
            </span>
          );
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
  const handleEmailClick = (e) => {
    if (e) {
      setPopup(!popup);
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
