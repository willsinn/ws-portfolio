import React from "react";
import SkillList from "./SkillList";
import { abtMission } from "../utils/desc.js";
import { landingIntro } from "../utils/desc.js";

const LandingPage = () => {
  return (
    <div
      className="landing"
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <section className="main" style={{ width: "60%" }}>
        <div>
          <div className="name">William Sinn</div>
          <div className="row">
            <p>{landingIntro}</p>
          </div>
        </div>
      </section>
      <section className="main" style={{ padding: "0", width: "40%" }}>
        <div className="col-1">
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
          <div className="col-1">
            <div className="about-section">
              <div className="content-cont col-1">
                <p className="summary-text">{}</p>
                <p className="summary-text">{abtMission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
