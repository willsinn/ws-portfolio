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
        <div className="about-cont">
          <div className="profile-cont">
            <div className="profile-img" />
          </div>
        </div>
        <div className="name-cont">
          <div className="name">William Sinn</div>
          <span>Fullstack Software Engineer</span>
        </div>
      </div>

      <div className="about-section">
        <div className="content-cont col-1">
          <span className="section-title">
            About me
            <div style={{ borderBottom: "1px solid white" }} />
          </span>
          <p className="summary-text">{abtSummary()}</p>
          <p className="summary-text">{abtMission()}</p>
        </div>
      </div>
      <div className="about-section">
        <div className="content-cont col-1">
          <span className="section-title">
            Skills <div style={{ borderBottom: "1px solid white" }} />
          </span>
          <SkillList />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
