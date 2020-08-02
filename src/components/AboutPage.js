import React from "react";
import SkillList from "./SkillList";
import { abtSummary, abtMission } from "../utils/static";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="section-header">
        <div>01.</div>
        <div>About</div>
      </div>
      <div className="row">
        <div className="profile-wrap">
          <div className="about-cont">
            <div className="profile-cont">
              <div className="profile-img" />
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="content-cont col-1">
            <span className="section-title">
              About me
              <div className="line" />
            </span>
            <p className="summary-text">{abtSummary()}</p>
            <p className="summary-text">{abtMission()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
