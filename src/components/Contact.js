import React, { useState } from "react";
const Contact = ({ contact, orient }) => {
  const [popup, setPopup] = useState(false);
  const [msg, setMsg] = useState(false);
  const emailClipboard = (
    <div className="popover">
      <div className="clip-cont col-1">
        <div className="clip-title col-1">Save to clipboard</div>
        <div className="clipboard">
          <textarea className="clip-text">{contact.link}</textarea>
          {msg ? <div className="copied-verify">Copied!!</div> : null}
          <i
            className="fa fa-clipboard"
            aria-hidden="true"
            onClick={(e) => copyToClipboard(e)}
          ></i>
        </div>
      </div>
    </div>
  );
  const copyToClipboard = (e) => {
    if (e) {
      const elem = e.target.parentElement.firstElementChild;
      elem.select();
      document.execCommand("copy");
      setMsg(!msg);
      setTimeout(() => setMsg(false), 2000);
      setTimeout(() => setPopup(false), 3000);
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
                borderRadius: "3px",
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
