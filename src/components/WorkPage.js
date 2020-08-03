import React from "react";
import ProjectList from "./ProjectList";

const WorkPage = ({ handleHideNav }) => {
  return (
    <div
      className="work"
      style={{ alignItems: "center" }}
      onMouseEnter={(e) => handleHideNav(e)}
    >
      <section className="main" onMouseLeave={(e) => handleHideNav(e)}>
        <div className="section-header">
          <div className="section-title-label">02.</div>
          <div className="section-title">Things I've built!</div>
        </div>
        <div className="work-content row">
          <ProjectList />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
