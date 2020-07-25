import React from "react";
import Mywellotask from "../images/mywellotask.png";
import Busstuff from "../images/busstuff.png";
import Zombiediner from "../images/zombiediner.png";

const Project = ({ project }) => {
  const renderImgs = () => {
    if (project.img) {
      switch (project.title) {
        case "Wello":
          return Mywellotask;
        case "Bus Stuff":
          return Busstuff;
        case "Zombie Diner":
          return Zombiediner;
        default:
          return;
      }
    }
  };
  return (
    <li className="project-item">
      <div className="prj-i-right col-1">
        <a
          href={`${project.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="prj-title"
        >
          {project.title}
        </a>
        <div className="prj-desc">{project.desc}</div>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "24px" }}
      >
        <div
          className="project-img"
          style={{ backgroundImage: `url(${renderImgs()})` }}
        />
      </a>
    </li>
  );
};
export default Project;
