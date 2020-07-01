import React from "react";
import { stackList } from "../utils/static";

const ProjectsPage = () => {
  const renderSkills = () => {
    const skills = stackList();
    if (skills && skills.length > 0) {
      return skills.map((skill) => (
        <li key={`${skill.name}-id`}>
          <div className="stack-list-item">{skill.name}</div>
        </li>
      ));
    }
  };
  return (
    <div className="projects">
      <div className="row-1 pg-section">
        <div className="tech-skills-cont">
          <ul className="stack-list">{renderSkills()}</ul>
        </div>
        <div className="slogan-cont"></div>
      </div>
      projects pgs
    </div>
  );
};

export default ProjectsPage;
