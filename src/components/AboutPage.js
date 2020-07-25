import React from "react";
import ContactList from "./ContactList";
import { abtSummary } from "../utils/static";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about-cont">
        <div className="profile-cont">
          <div className="profile-img" />
        </div>

        <div className="about-section">
          <div className="content-cont">
            <span className="section-title">About Me</span>
            <p className="summary-text">{abtSummary()}</p>
          </div>
        </div>
        <ContactList />
      </div>
    </div>
  );
};

export default AboutPage;
