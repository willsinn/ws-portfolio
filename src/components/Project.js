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
          <div
            className="prj-title"
            onClick={(e) => handleRenderActive(project.title)}
          >
            {project.title}
          </div>
          <div className="prj-desc">{project.desc}</div>
        </div>
      </div>
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
    </li>
  );
};
export default Project;
{
  /* <a
href={`${project.link}`}
target="_blank"
rel="noopener noreferrer"
className="prj-title"
>
{project.title}
</a> */
}
