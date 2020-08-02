import React from "react";
import Wello from "../images/mywellotask.png";
import Bus from "../images/buscomparer.png";
import Zombie from "../images/zombiediner.png";

const Project = ({ project }) => {
  const icn = { color: "var(--txt-yw)", fontSize: "13.5px" };
  const renderProjectImg = (type) => {
    switch (type) {
      case "Wello":
        return Wello;
      case "Bus Comparer":
        return Bus;
      case "Zombie Diner":
        return Zombie;
      default:
        return;
    }
  };
  console.log(project);
  return (
    <li className="project-item">
      <div className="project-info col-1">
        <div className="prj-title row">
          <div>{project.title}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <i
              className="fa fa-external-link"
              style={icn}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="prj-desc">{project.desc}</div>
      </div>
      <div className="project-imgs">
        <img
          src={renderProjectImg(project.title)}
          alt=""
          className="project-img"
        />
      </div>
    </li>
  );
};
export default Project;
