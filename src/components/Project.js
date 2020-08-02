import React from "react";

const Project = ({ project }) => {
  const icn = { color: "var(--txt-yw)", fontSize: "13.5px" };

  return (
    <li className="project-item">
      <div className="col-1">
        <div className="prj-title row">
          <div>{project.title}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <i
              className="fa fa-external-link"
              style={icn}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="prj-desc">{project.desc}</div>
      </div>
    </li>
  );
};
export default Project;
