import React from "react";
import SkillList from "./SkillList";
import ProjectList from "./ProjectList";
import { abtBrand } from "../utils/static";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <div className="profile-header-cont">
        <div className="name-cont">
          <div className="name">William Sinn</div>
          <span>Fullstack Software Engineer</span>
        </div>
        <div className="slogan-cont">
          <span className="slogan-text">{abtBrand()}</span>
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

      <div className="project-section">
        <div className="section-header">
          <div className="section-header-cont">
            <span className="section-title">Technical Stack</span>
          </div>
          <div className="section-horz-line" />
        </div>

        <SkillList />
      </div>
    </div>
  );
};

export default ProjectsPage;
