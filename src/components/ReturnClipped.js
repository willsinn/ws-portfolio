import React from "react";

const ReturnClipped = ({ msg, hover, contact, copyToClipboard }) => {
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

export default ReturnClipped;
