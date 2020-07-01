import React from "react";
import ContactList from "./ContactList";
import { abtBrand, abtSummary } from "../utils/txt";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="abt-top pg-section">
        <div className="picture-cont">
          <div className="picture-img"></div>
        </div>
        <div className="slogan-cont">
          <p className="slogan-text">{abtBrand()}</p>
        </div>
      </div>

      <div className="pg-section">
        <div className="abt-bottom horz-wrap">
          <div className="summary-cont">
            <p className="summary-text">{abtSummary()}</p>
          </div>
          <div className="contacts-cont">
            <div className="contacts-header">
              <ContactList />
            </div>
            <ul className="contacts-list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
