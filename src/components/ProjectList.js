import React from "react";
import Project from "./Project";
import Mywellotask from "../images/mywellotask.png";
import Buscomparer from "../images/buscomparer.png";
import Zombiediner from "../images/zombiediner.png";

const ProjectList = ({ projects, active, handleRenderActive }) => {
  const renderProjects = () => {
    if (projects && projects.length > 0) {
      return projects.map((project) => {
        const renderImgs = () => {
          if (project.img) {
            switch (project.title) {
              case "Wello":
                return Mywellotask;
              case "Bus Comparer":
                return Buscomparer;
              case "Zombie Diner":
                return Zombiediner;
              default:
                return;
            }
          }
        };
        return (
          <div key={`${project.title}-id`}>
            <Project
              project={project}
              active={active}
              handleRenderActive={handleRenderActive}
            />
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
          </div>
        );
      });
    }
  };
  return <ul className="col-1">{renderProjects()}</ul>;
};
export default ProjectList;
