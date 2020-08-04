import React from "react";

const ReturnClipped = ({ alert, contact, handleCopySeq }) => {
  const copyToClipboard = (e) => {
    if (e) {
      const elem = e.target.parentElement.firstElementChild;
      elem.select();
      document.execCommand("copy");
      handleCopySeq(e);
    }
  };
  return (
    <div className="popover">
      <div className="clip-cont col-1">
        <div className="active-link clip-title col-1">My Email Address</div>
        <div className="clipboard">
          <textarea
            className="clip-text"
            value={contact.link}
            readOnly
          ></textarea>
          {alert === "success" ? (
            <div className="popup-info">
              <div className="triangle-up"></div>
              <span>Copied!!</span>
            </div>
          ) : null}
          {alert === "guide" ? (
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
