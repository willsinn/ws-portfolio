import React, { useState } from "react";
import ClipboardModal from "./ClipboardModal";

const Contact = ({ contact, content }) => {
  const [popup, setPopup] = useState(false);
  const [alert, setAlert] = useState("");
  const handleEmailClick = (e) => {
    if (e) return setPopup(!popup);
  };
  const handleCopySeq = (e) => {
    if (e) {
      setAlert("success");
      setTimeout(
        () =>
          setAlert(
            "",
            setTimeout(() => setPopup(!popup)),
            1000
          ),
        2000
      );
    }
  };
  const handleClosePopup = (e) => {
    if (e) {
      setAlert("");
      setPopup(!popup);
    }
  };

  const renderContact = () => {
    if (contact) {
      switch (contact.method) {
        case "email":
          return renderEmailContact();
        case "linkedin":
          return <i className="fa fa-linkedin-square" aria-hidden="true"></i>;
        case "github":
          return <i className="fa fa-github-square" aria-hidden="true"></i>;
        case "instagram":
          return <i className="fa fa-instagram" aria-hidden="true"></i>;
        default:
          break;
      }
    }
  };
  const renderEmailContact = () => {
    return (
      <div className="icon">
        <span target="_blank" rel="noopener noreferrer">
          {popup ? (
            <ClipboardModal
              alert={alert}
              contact={contact}
              handleCopySeq={handleCopySeq}
              handleClosePopup={handleClosePopup}
            />
          ) : null}
          {content === "" ? (
            <div
              className="btn-hover-bg"
              style={{ height: "16.75px", width: "23px" }}
            >
              <i
                className="fa fa-envelope"
                aria-hidden="true"
                onClick={(e) => handleEmailClick(e)}
              ></i>
            </div>
          ) : (
            <div>{content}</div>
          )}
        </span>
      </div>
    );
  };
  return (
    <li className="contact-item">
      <div className="icon">
        <a href={contact.link} target="_blank" rel="noopener noreferrer">
          <div className="btn-hover-bg">{renderContact()}</div>
        </a>
      </div>
    </li>
  );
};
export default Contact;
