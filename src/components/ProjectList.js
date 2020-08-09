import React, { useState } from "react";
import { projectList } from "../utils/static";
import Project from "./Project";

const ProjectList = () => {
  const [gif, setGif] = useState("");
  const projects = projectList();
  const renderGif = (section) => {
    setGif(section);
  };
  const renderProjects = () => {
    if (projects && projects.length > 0) {
      return projects.map((p, i) => {
        return (
          <Project
            key={`${p}-${i}`}
            project={p}
            gif={gif}
            renderGif={renderGif}
          />
        );
      });
    }
  };
  return <ul className="project-container col-1">{renderProjects()}</ul>;
};
export default ProjectList;
