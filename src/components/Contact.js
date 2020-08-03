import React, { useState } from "react";
const Contact = ({ contact, orient }) => {
  const [popup, setPopup] = useState(false);
  const [msg, setMsg] = useState(false);
  const [hover, setHover] = useState(false);
  const emailClipboard = () => {
    return (
      <div className="popover">
        <div className="clip-cont col-1">
          <div className="active-link clip-title col-1">My Email Address</div>
          <div className="clipboard">
            <textarea className="clip-text">{contact.link}</textarea>
            {msg ? (
              <div className="popup-info">
                <div className="triangle-up"></div>
                <span>Copied!!</span>
              </div>
            ) : null}
            {hover ? (
              <div className="popup-info">
                <div className="triangle-up"></div>
                <span>Copy to clipboard</span>
              </div>
            ) : null}
            <i
              className="fa fa-clipboard"
              aria-hidden="true"
              onClick={(e) => copyToClipboard(e)}
            ></i>
          </div>
        </div>
      </div>
    );
  };
  const copyToClipboard = (e) => {
    if (e) {
      setHover(false);
      const elem = e.target.parentElement.firstElementChild;
      elem.select();
      document.execCommand("copy");
      setMsg(!msg);
      setTimeout(() => setPopup(false), 2500);
    }
  };
  const renderContact = () => {
    if (contact) {
      switch (contact.method) {
        case "email":
          return (
            <div className="icon">
              <div target="_blank" rel="noopener noreferrer">
                {popup ? <>{emailClipboard()}</> : null}
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  onClick={(e) => handleEmailClick(e)}
                ></i>
              </div>
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
      setHover(!hover);

      setTimeout(() => setHover(false), 3000);
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
