import React from "react";
import Mywellotask from "../images/mywellotask.png";
import Busstuff from "../images/busstuff.png";
import Zombiediner from "../images/zombiediner.png";

const Project = ({ project, active, handleRenderActive }) => {
  console.log(project, active);
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
      <div className="col-1">
        <div className="row">
          {active === project.title ? (
            <div
              style={{ backgroundColor: "#e4f0f6", color: "#0079bf" }}
              className="prj-title"
              onClick={(e) => handleRenderActive(e, project.title)}
            >
              <div>{project.title}</div>
              <div className="prj-desc">{project.desc}</div>
            </div>
          ) : (
            <div
              className="prj-title"
              onClick={(e) => handleRenderActive(e, project.title)}
            >
              <div>{project.title}</div>
              <div className="prj-desc">{project.desc}</div>
            </div>
          )}
        </div>
      </div>
      <div className="active-project-cont">
        {active === project.title ? (
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
        ) : null}
      </div>
    </li>
  );
};
export default Project;
