import React, { useState } from "react";
import Wello from "../images/mywellotask.png";
import Bus from "../images/buscomparer.png";
import Zombie from "../images/zombiediner.png";
import { welloGif } from "../utils/gifs.js";

const Project = ({ project }) => {
  const [gif, setGif] = useState(false);
  const delayRenderGif = (e) => {
    if (e) {
      setGif(!gif);
      // setTimeout(() => setGif(!gif), 200);
    }
  };
  const phoneStyles = { height: "390px", width: "260px" };
  const renderProjectImg = (type) => {
    switch (type) {
      case "Wello":
        return (
          <>
            {gif ? (
              <div className="gif-cont">{welloGif()}</div>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="img-wrap"
                onMouseEnter={(e) => delayRenderGif(e)}
              >
                <div className="dampener" />
                <img
                  src={Wello}
                  alt={project.link}
                  className="project-img"
                  style={project.appType === "mobile" ? phoneStyles : null}
                />
              </a>
            )}
          </>
        );
      case "Bus Comparer":
        return (
          <>
            {gif ? (
              <></>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="img-wrap"
                onMouseEnter={(e) => delayRenderGif(e)}
              >
                <div className="dampener" />
                <img
                  src={Bus}
                  alt={project.link}
                  className="project-img"
                  style={project.appType === "mobile" ? phoneStyles : null}
                />
              </a>
            )}
          </>
        );
      case "Zombie Diner":
        return (
          <>
            {gif ? (
              <></>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="img-wrap"
                onMouseEnter={(e) => delayRenderGif(e)}
              >
                <div className="dampener" />
                <img
                  src={Zombie}
                  alt={project.link}
                  className="project-img"
                  style={project.appType === "mobile" ? phoneStyles : null}
                />
              </a>
            )}
          </>
        );
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
      <div className="render-img-cont" onMouseLeave={(e) => delayRenderGif(e)}>
        {renderProjectImg(project.title)}
      </div>
    </li>
  );
};
export default Project;
