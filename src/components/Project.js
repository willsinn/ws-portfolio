import React from "react";

import OpenLinkIcon from "../images/open-link-icon.png";

const Project = ({ project, active, handleRenderActive }) => {
  console.log(project, active);

  return (
    <li className="project-item">
      <div className="col-1">
        <div>
          {active === project.title ? (
            <div
              style={{ backgroundColor: "#e4f0f6", color: "#0079bf" }}
              className="prj-title"
              onClick={(e) => handleRenderActive(e, project.title)}
            >
              <div>{project.title}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="open-link-icon" src={OpenLinkIcon} alt="" />
              </a>
              <div className="prj-desc">{project.desc}</div>
            </div>
          ) : (
            <div
              className="prj-title"
              onClick={(e) => handleRenderActive(e, project.title)}
            >
              <div>{project.title}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="open-link-icon" src={OpenLinkIcon} alt="" />
              </a>
              <div className="prj-desc">{project.desc}</div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="active-project-cont">
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
      </div> */}
    </li>
  );
};
export default Project;
