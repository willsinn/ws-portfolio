import React from "react";

const ClipboardModal = ({
  alert,
  contact,
  handleCopySeq,
  handleClosePopup,
}) => {
  const copyToClipboard = (e) => {
    if (e) {
      const elem = e.target.parentElement.lastElementChild;
      elem.select();
      document.execCommand("copy");
      handleCopySeq(e);
    }
  };
  return (
    <div className="popover">
      <div className="clip-cont col-1">
        <div className="popup-header">
          <div className="clip-title col-1">Copy Email Address</div>
          <button className="close-btn" onClick={(e) => handleClosePopup(e)}>
            <span>✕</span>
          </button>
        </div>
        <div className="clipboard">
          {alert === "success" ? (
            <div className="popup-info">
              <div className="triangle-up"></div>
              <span>Copied!!</span>
            </div>
          ) : null}
          <i
            className="fa fa-clipboard"
            aria-hidden="true"
            onClick={(e) => copyToClipboard(e)}
          ></i>
          <textarea
            className="clip-text"
            value={`${contact.link}`}
            readOnly
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ClipboardModal;
