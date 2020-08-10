import React, { useState } from "react";
import Wello from "../images/mywellotask.png";
import Bus from "../images/buscomparer.png";
import Zombie from "../images/zombiediner.png";
import Otter from "../images/swimmyotter.png";
import w1 from "../images/w1.png";
import w2 from "../images/w2.png";
import w3 from "../images/w3.png";
import w4 from "../images/w4.png";
import w5 from "../images/w5.png";
import w6 from "../images/w6.png";
import w7 from "../images/w7.png";
import w8 from "../images/w8.png";
import w9 from "../images/w9.png";
import w10 from "../images/w10.png";

const Project = ({ project }) => {
  const [active, setActive] = useState("");
  const [hover, setHover] = useState(false);
  const [showing, setShowing] = useState();
  const phoneStyles = { height: "390px", width: "260px" };
  const welloStory = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10];

  const handleHover = (e) => {
    setHover(true);
    setShowing(renderProjectImg(project.title));
    // setActive(project.title);
    renderTogglingImages(e);
  };
  const renderTogglingImages = (e) => {
    if (e) {
      setActive(project.title);
      let idx = 0;
      setTimeout(function next() {
        const s = welloStory[idx];
        if (idx < welloStory.length) {
          setShowing(s);
          idx++;
        } else {
          setShowing(renderProjectImg(project.title));
          idx = 0;
        }
        setTimeout(next, 2250);
      }, 1500);
    }
  };
  console.log(active);
  const handleLeave = (e) => {
    setActive("");
    setHover(false);
  };
  const renderProjectImg = (type) => {
    switch (type) {
      case "Wello":
        return Wello;
      case "Bus Comparer":
        return Bus;
      case "Zombie Diner":
        return Zombie;
      case "Swimmy Otter":
        return Otter;
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
  const imgSrc =
    hover && showing !== 0 ? showing : renderProjectImg(project.title);
  console.log(imgSrc);
  return (
    <li
      className="project-item"
      style={project.appType === "mobile" ? { width: "66.66%" } : {}}
      // onMouseLeave={(e) => handleLeave(e)}
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

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="img-wrap"
        onMouseEnter={(e) => handleHover(e)}
      >
        <div className="dampener" />
        <img
          src={imgSrc}
          alt={project.link}
          className="project-img"
          style={project.appType === "mobile" ? phoneStyles : null}
        />
      </a>
    </li>
  );
};
export default Project;
