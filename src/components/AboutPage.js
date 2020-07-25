import React from "react";
import ContactList from "./ContactList";
import { abtSummary } from "../utils/static";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="row-1 pg-section">
        <div className="picture-cont">
          <div className="picture-img"></div>
        </div>
      </div>

      <div className="about-section">
        <div className="content-cont">
          <span className="section-title">About</span>
          <p className="summary-text">{abtSummary()}</p>
        </div>
      </div>
      <ContactList />
    </div>
  );
};

export default AboutPage;
