import React from "react";
import SkillList from "./SkillList";
import { abtMission } from "../utils/desc.js";

const AboutPage = () => {
  return (
    <div className="about">
      <section className="main" style={{ padding: "0" }}>
        <div className="row">
          <div className="col-1">
            <div className="section-header">
              <div className="section-title-label">01.</div>
              <div className="section-title">About</div>
            </div>
            <div className="about-section">
              <div className="content-cont col-1">
                <p className="summary-text">{}</p>
                <p className="summary-text">{abtMission}</p>
              </div>
            </div>
          </div>
          <div className="profile-wrap">
            <div className="about-cont">
              <div className="profile-cont">
                <div
                  className="dampener"
                  style={{ maxHeight: "100%", minWidth: "247.5px" }}
                />
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
