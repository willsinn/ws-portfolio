import React from "react";
import { projectList } from "../utils/static";
import Project from "./Project";
import Mywellotask from "../images/mywellotask.png";
import Buscomparer from "../images/buscomparer.png";
import Zombiediner from "../images/zombiediner.png";

const ProjectList = () => {
  const projects = projectList();

  const renderProjects = () => {
    if (projects && projects.length > 0) {
      return projects.map((p, i) => {
        return <Project key={`${p}-${i}`} project={p} />;
      });
    }
  };
  return <ul className="project-container col-1">{renderProjects()}</ul>;
};
export default ProjectList;
