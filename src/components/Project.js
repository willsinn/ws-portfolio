import React from "react";
import Wello from "../images/mywellotask.png";
import Bus from "../images/buscomparer.png";
import Zombie from "../images/zombiediner.png";

const Project = ({ project }) => {
  const icn = { color: "var(--txt-yw)", fontSize: "13.5px" };
  const phoneStyles = { height: "390px", width: "260px" };
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
      <a href={project.link} targ="_blank" alt="" className="img-wrap">
        <img
          src={renderProjectImg(project.title)}
          alt={project.link}
          className="project-img"
          style={project.appType === "mobile" ? phoneStyles : null}
        />
      </a>
    </li>
  );
};
export default Project;
