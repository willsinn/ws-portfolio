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
    }
  };

  return (
    <div className="projects">
      <div className="row-1 pg-section">
        <div className="tech-skills-cont">
          <ul>{renderSkills()}</ul>
        </div>
      </div>
      <div className="">
        <div className="projects-cont">
          <ul className="col-1">{renderProjects()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
