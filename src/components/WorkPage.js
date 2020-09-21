import React from "react";
import ProjectList from "./ProjectList";
import SkillList from "./SkillList";

const WorkPage = () => {
  return (
    <div className="work" style={{ alignItems: "center" }}>
      <section className="main">
        <div className="section-header">
          <div className="section-title-label">⌬</div>
          <div className="section-title">Things I've built...</div>
        </div>
        <SkillList />
        <div className="work-content row">
          <ProjectList />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
