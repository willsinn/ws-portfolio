import React from "react";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  const renderProjects = () => {
    if (projects && projects.length > 0) {
      return projects.map((project) => {
        return <Project key={`${project.title}-id`} project={project} />;
      });
    }
  };
  return <ul className="col-1">{renderProjects()}</ul>;
};
export default ProjectList;
