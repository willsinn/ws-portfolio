import React from "react";
import ProjectList from "./ProjectList";
import { abtBrand } from "../utils/static";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <div className="projects-cont">
        <div className="profile-header-cont">
          <div className="slogan-cont">
            <span className="slogan-text">{abtBrand()}</span>
          </div>
        </div>
        <div className="project-section">
          <div className="section-header">
            <div className="section-header-cont">
              <span className="section-title">Technical Stack</span>
            </div>
            <div className="section-horz-line" />
          </div>
        </div>
        <div className="project-section">
          <div className="section-header">
            <div className="section-header-cont">
              <span className="section-title">Projects</span>
            </div>
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
