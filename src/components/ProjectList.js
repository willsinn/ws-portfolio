import React from "react";
import { projectList } from "../utils/static";

const ProjectList = () => {
  const renderProjects = () => {
    const projects = projectList();
    if (projects && projects.length > 0) {
      return projects.map((project) => (
        <li key={`${project.title}-id`} className="project-item">
          <div className="prj-i-left col-1">{project.img}</div>
          <div className="prj-i-right col-1">
            <div className="prj-title">{project.title}</div>
            <a href="/link" className="prj-link">
              {project.link}
            </a>
            <div className="prj-desc">{project.desc}</div>
          </div>
        </li>
      ));
    }
  };
  return <ul className="col-1">{renderProjects()}</ul>;
};
export default ProjectList;
