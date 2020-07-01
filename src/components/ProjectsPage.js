import React from "react";
import { stackList, projectList } from "../utils/static";

const ProjectsPage = () => {
  const renderSkills = () => {
    const skills = stackList();
    if (skills && skills.length > 0) {
      return skills.map((skill) => (
        <li key={`${skill.name}-id`} className="stack-list-item">
          <div className="horz-wrap">{skill.name}</div>
        </li>
      ));
    }
  };
  const renderProjects = () => {
    const projects = projectList();
    if (projects && projects.length > 0) {
      return projects.map((project) => (
        <li key={`${project.title}-id`} className="project-item">
          <div className="horz-wrap">
            <div className="prj-i-left col-1">{project.img}</div>
            <div className="prj-i-right col-1">
              <div>{project.title}</div>
              <a href="/link">{project.link}</a>
              <div>{project.desc}</div>
            </div>
          </div>
        </li>
      ));
    }
  };

  return (
    <div className="projects">
      <div className="row-1 pg-section">
        <div className="tech-skills-cont">
          <ul>{renderSkills()}</ul>
        </div>
      </div>
      <div className="pg-section">
        <div className="row-2">
          <ul className="col-1">{renderProjects()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
