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
      <div
        className="project-img"
        style={{ backgroundImage: `url(${renderImgs()})` }}
      />
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
