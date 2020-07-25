import React from "react";
import SkillList from "./SkillList";
import ContactList from "./ContactList";
import { abtSummary, abtMission } from "../utils/static";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="sider contact-links">
        <ContactList orient={"vertical"} />
        <div className="about-sider-vert-line" />
      </div>
      <div className="profile-wrap">
        <div className="name-cont">
          <div className="name">William Sinn</div>
          <span>Fullstack Software Engineer</span>
        </div>
        <div className="about-cont">
          <div className="profile-cont">
            <div className="profile-img" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="content-cont">
          <span className="section-title">About me</span>
          <p className="summary-text">{abtSummary()}</p>
          <p className="summary-text">{abtMission()}</p>
        </div>
      </div>
      <div className="about-section">
        <div className="content-cont">
          <span className="section-title">Skill set</span>
          <SkillList />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
