import React from "react";
import ProjectList from "./ProjectList";
import { abtBrand } from "../utils/static";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <div className="projects-cont">
        <div className="project-section">
          <div className="section-header">
            <span className="section-title" style={{ color: "black" }}>
              Technical Projects
            </span>
            <div className="section-horz-line" />
          </div>
          <ProjectList />
        </div>
      </div>
      <div className="email-sider">
        <div className="email-wrap">
          <div className="fixed-email">w.h.sinn@gmail.com</div>
        </div>
        <div className="project-sider-vert-line" />
      </div>
    </div>
  );
};

export default ProjectsPage;
