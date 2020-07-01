import React from "react";
import { abtBrand, abtSummary } from "../utils/static";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="row-1 pg-section">
        <div className="picture-cont">
          <div className="picture-img"></div>
        </div>
        <div className="slogan-cont">
          <p className="slogan-text">{abtBrand()}</p>
        </div>
      </div>

      <div className="pg-section">
        <div className="row-2 horz-wrap">
          <div className="summary-cont">
            <p className="summary-text">{abtSummary()}</p>
          </div>
          <div className="contacts-cont">
            <div className="contacts-header">Contacts</div>
            <ul className="contacts-list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
