import React, { useState } from "react";
import ProjectList from "./ProjectList";
import { projectList } from "../utils/static";

const ProjectsPage = () => {
  const projects = projectList();
  const [active, setActive] = useState("Wello");
  const handleRenderActive = (e, targ) => {
    if (e) {
      setActive(targ);
    }
  };
  return (
    <div className="projects">
      <div className="projects-cont">
        <div className="project-section">
          <div className="section-header">
            <span
              className="section-title"
              style={{ color: "black", width: "200px" }}
            >
              Technical Projects
            </span>
            <div className="section-horz-line" />
          </div>
          <ProjectList
            projects={projects}
            active={active}
            handleRenderActive={handleRenderActive}
          />
        </div>
      </div>
      <div className="email-sider">
        <div className="email-wrap">
          <div className="fixed-email">w.h.sinn@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
