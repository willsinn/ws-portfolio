import React from "react";
import SkillList from "./SkillList";
import { abtSummary, abtMission } from "../utils/static";

const AboutPage = ({ handleHideNav }) => {
  return (
    <div className="about" onMouseEnter={(e) => handleHideNav(e)}>
      <section
        className="main"
        style={{ padding: "0" }}
        onMouseLeave={(e) => handleHideNav(e)}
      >
        <div className="row">
          <div className="col-1">
            <div className="section-header">
              <div className="section-title-label">01.</div>
              <div className="section-title">About</div>
            </div>
            <div className="about-section">
              <div className="content-cont col-1">
                <p className="summary-text">{abtSummary()}</p>
                <p className="summary-text">{abtMission()}</p>
              </div>
            </div>
          </div>
          <div className="profile-wrap">
            <div className="about-cont">
              <div className="profile-cont">
                <div className="profile-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <SkillList />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
