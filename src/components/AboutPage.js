import React from "react";
import ContactList from "./ContactList";
import { abtSummary, abtMission } from "../utils/static";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="sider contact-links">
        <div className="sider-vert-line" />
        <ContactList orient={"vertical"} />
        <div className="sider-vert-line" />
      </div>
      <div className="about-cont">
        <div className="profile-cont">
          <div className="profile-img" />
        </div>

        <div className="about-section">
          <div className="content-cont">
            <span className="section-title">About Me</span>
            <p className="summary-text">{abtSummary()}</p>
            <p className="summary-text">{abtMission()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
