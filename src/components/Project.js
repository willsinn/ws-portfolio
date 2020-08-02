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
  const renderProjectStack = (stack) => {
    if (stack.length > 0) {
      return stack.map((val) => <li className="stack-item">{val}</li>);
    }
  };
  return (
    <li className="project-item">
      <div className="project-info col-1">
        <div className="prj-title row">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div>{project.title}</div>
          </a>
        </div>
        <div className="overlay-container">
          <div className="prj-desc">{project.desc}</div>
        </div>
        <ul className="project-stack">{renderProjectStack(project.stack)}</ul>
        <i className="fa fa-external-link" style={icn} aria-hidden="true"></i>
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
