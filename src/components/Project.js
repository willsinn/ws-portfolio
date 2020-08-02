import React from "react";
import Wello from "../images/mywellotask.png";
import Bus from "../images/buscomparer.png";
import Zombie from "../images/zombiediner.png";

const Project = ({ project }) => {
  const iconGit = {
    fontSize: "20px",
    height: "20px",
    width: "20px",
    marginRight: "12px",
  };
  const iconExternal = {
    fontSize: "23.5px",
    height: "24px",
    width: "24px",
    marginRight: "8px",
    color: "white",
    backgroundColor: "inherit",
  };
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
            {project.title}
          </a>
        </div>
        <div className="overlay-container">
          <div className="prj-desc">{project.desc}</div>
        </div>
        <ul className="project-stack">{renderProjectStack(project.stack)}</ul>
        <div className="row">
          <a href={project.git} target="_blank" rel="noopener noreferrer">
            <i
              className="icon fa fa-github-square"
              style={iconGit}
              aria-hidden="true"
            ></i>
          </a>
          <a
            href={project.link}
            style={{ background: "transparent" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="icon fa fa-external-link"
              style={iconExternal}
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>

      <a
        href={project.link}
        targ="_blank"
        rel="noopener noreferrer"
        className="img-wrap"
      >
        <div className="dampener" />
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
