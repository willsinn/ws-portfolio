import React from "react";

const Project = ({ project }) => {
  return (
    <li className="project-item">
      <div className="prj-i-left col-1">{project.img}</div>
      <div className="prj-i-right col-1">
        <div className="prj-title">{project.title}</div>
        <a href="/link" className="prj-link">
          {project.link}
        </a>
        <div className="prj-desc">{project.desc}</div>
      </div>
    </li>
  );
};
export default Project;
