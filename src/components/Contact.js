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
            <div className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {popup ? emailClipboard : null}
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  onClick={(e) => handleEmailClick(e)}
                ></i>
              </a>
            </div>
          );
        case "linkedin":
          return (
            <div className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>
          );
        case "github":
          return (
            <div className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </div>
          );
        case "instagram":
          return (
            <div className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
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
        <li className="contact-item">{renderContact()}</li>
      ) : null}
    </>
  );
};
export default Contact;
