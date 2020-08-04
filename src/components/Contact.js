import React, { useState } from "react";
import ReturnClipped from "./ReturnClipped";

const Contact = ({ contact, orient }) => {
  const [popup, setPopup] = useState(false);
  const [alert, setAlert] = useState("");
  const handleEmailClick = (e) => {
    if (e) {
      setPopup(!popup);
      setTimeout(
        () =>
          setAlert(
            "guide",
            setTimeout(() => setAlert(""), 3000)
          ),
        1500
      );
    }
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
          return (
            <div className="icon">
              <span target="_blank" rel="noopener noreferrer">
                {popup ? (
                  <ReturnClipped
                    alert={alert}
                    contact={contact}
                    handleCopySeq={handleCopySeq}
                    handleClosePopup={handleClosePopup}
                  />
                ) : null}
                <div
                  className="btn-hover-bg"
                  style={{ height: "17px", width: "23.5px" }}
                >
                  <i
                    className="fa fa-envelope"
                    aria-hidden="true"
                    onClick={(e) => handleEmailClick(e)}
                  ></i>
                </div>
              </span>
            </div>
          );
        case "linkedin":
          return (
            <div className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <div className="btn-hover-bg">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          );
        case "github":
          return (
            <div className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <div className="btn-hover-bg">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          );
        case "instagram":
          return (
            <div className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <div className="btn-hover-bg">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          );
        default:
          break;
      }
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
