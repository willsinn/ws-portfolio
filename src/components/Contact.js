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
    const contentArr = content.split(" ");
    const btnContent = () => (
      <div onClick={(e) => handleEmailClick(e)}>
        {content === "" ? (
          <div
            className="btn-hover-bg"
            style={{ height: "16.75px", width: "23px" }}
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
        ) : (
          <div className="email navbar-btn">
            <div className="email active-link">
              {contentArr.map((cont) => (
                <span style={{ margin: "0 2px" }}>{cont}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
    return (
      <span target="_blank" rel="noopener noreferrer">
        {popup ? (
          <ClipboardModal
            alert={alert}
            contact={contact}
            handleCopySeq={handleCopySeq}
            handleClosePopup={handleClosePopup}
          />
        ) : null}
        {btnContent()}
      </span>
    );
  };
  return (
    <li className="contact-item">
      {contact.method === "email" ? (
        <div className="icon">{renderEmailContact()} </div>
      ) : (
        <div className="icon">
          <a href={contact.link} target="_blank" rel="noopener noreferrer">
            <div className="btn-hover-bg">{renderContact()}</div>
          </a>
        </div>
      )}
    </li>
  );
};
export default Contact;
