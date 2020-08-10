import React from "react";
import Wello from "../images/mywellotask.png";
import Bus from "../images/buscomparer.png";
import Zombie from "../images/zombiediner.png";
import Otter from "../images/swimmyotter.png";
import w1 from "../images/w1.png";
import w2 from "../images/w2.png";
import w3 from "../images/w3.png";
import w4 from "../images/w4.png";
import w5 from "../images/w5.png";
import w6 from "../images/w6.png";
import w7 from "../images/w7.png";
import w8 from "../images/w8.png";
import w9 from "../images/w9.png";
import w10 from "../images/w10.png";

const Project = ({ project }) => {
  const phoneStyles = { height: "390px", width: "260px" };
  const renderProjectImg = (type) => {
    switch (type) {
      case "Wello":
        return Wello;
      case "Bus Comparer":
        return Bus;
      case "Zombie Diner":
        return Zombie;
      case "Swimmy Otter":
        return Otter;
      default:
        return;
    }
  };
  const renderProjectStack = (stack) => {
    if (stack.length > 0) {
      return stack.map((val, i) => (
        <li key={`skill-${i}`} className="stack-item">
          {val}
        </li>
      ));
    }
  };
  return (
    <li
      className="project-item"
      style={project.appType === "mobile" ? { width: "66.66%" } : {}}
    >
      <div className="project-info col-1">
        <div className="prj-title row">{project.title}</div>
        <div className="overlay-container">
          <div className="project-refs">
            <div className="icon" style={{ marginRight: "4px" }}>
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                <div className="p-i btn-hover-bg">
                  <i
                    className="p-i fa fa-github-square "
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
            </div>
            <div className="icon">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="p-i btn-hover-bg">
                  <i
                    className="p-i fa fa-external-link-square"
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
            </div>
          </div>
          <div className="prj-desc">{project.desc}</div>
        </div>
        <ul className="project-stack">{renderProjectStack(project.stack)}</ul>
      </div>

      <a
        href={project.link}
        target="_blank"
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
