import React from "react";
import Mywellotask from "../images/mywellotask.png";

const Project = ({ project }) => {
  const renderImgs = () => {
    if (project.img) {
      switch (project.title) {
        case "Wello":
          return Mywellotask;
        default:
          return;
      }
    }
  };
  return (
    <li className="project-item">
      <a href={project.link} target="_blank">
        <div
          className="project-img"
          style={{ backgroundImage: `url(${renderImgs()})` }}
          onClick={project.link}
        />
      </a>
      <div className="prj-i-right col-1">
        <div className="prj-title">
          <a href={`${project.link}`} target="_blank" className="prj-title">
            {project.title}
          </a>
        </div>
        <div className="prj-desc">{project.desc}</div>
      </div>
    </li>
  );
};
export default Project;
