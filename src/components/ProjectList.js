import React from "react";
import Project from "./Project";

import { projectList } from "../utils/static";

const ProjectList = () => {
  const renderProjects = () => {
    const projects = projectList();
    if (projects && projects.length > 0) {
      return projects.map((project) => (
        <Project key={`${project.title}-id`} project={project} />
      ));
    }
  };
  return <ul className="col-1">{renderProjects()}</ul>;
};
export default ProjectList;
