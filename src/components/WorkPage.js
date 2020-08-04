import React from "react";
import ProjectList from "./ProjectList";

const WorkPage = () => {
  return (
    <div className="work" style={{ alignItems: "center" }}>
      <section className="main">
        <div className="section-header">
          <div className="section-title-label">02.</div>
          <div className="section-title">What I've built</div>
        </div>
        <div className="work-content row">
          <ProjectList />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
