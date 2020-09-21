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

import b1 from "../images/b1.png";
import b2 from "../images/b2.png";
import b3 from "../images/b3.png";
import b4 from "../images/b4.png";
import b5 from "../images/b5.png";

import z1 from "../images/z1.png";
import z2 from "../images/z2.png";
import z3 from "../images/z3.png";
import z4 from "../images/z4.png";
import z5 from "../images/z5.png";

import o1 from "../images/o1.png";
import o2 from "../images/o2.png";
import o3 from "../images/o3.png";

const welloStory = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10];
const otterStory = [o1, o2, o3];
const busStory = [b1, b2, b3, b4, b5];
const zombieStory = [z1, z2, z3, z4, z5];

const Project = ({ project }) => {
  const [quit, setQuit] = useState(false);
  const [hover, setHover] = useState(false);
  const [showing, setShowing] = useState(null);
  const [slides, setSlides] = useState([]);
  const phoneStyles = { height: "390px", width: "260px" };

  const handleHover = (e) => {
    setShowing(renderProjectImg(project.title));
    setHover(true);
    renderTogglingImages(e);
  };
  const renderTogglingImages = (e) => {
    if (e) {
      let idx = 0;
      setTimeout(function next() {
        const s = slides[idx];
        if (quit) return;

        if (idx < slides.length) {
          setShowing(s);

          idx++;
        } else {
          setShowing(renderProjectImg(project.title));
          idx = 0;
        }
        setTimeout(next, 1000);
      }, 1000);
    }
  };
  const handleLeave = () => {
    setShowing(renderProjectImg(project.title));
    setHover(false);
    setQuit(true);
  };
  const renderProjectImg = (type) => {
    switch (type) {
      case "Wello":
        if (slides.length === 0) {
          setSlides(welloStory);
        }
        return Wello;
      case "Bus Comparer":
        if (slides.length === 0) {
          setSlides(busStory);
        }
        return Bus;
      case "Zombie Diner":
        if (slides.length === 0) {
          setSlides(zombieStory);
        }
        return Zombie;
      case "Swimmy Otter":
        if (slides.length === 0) {
          setSlides(otterStory);
        }
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
  const imgSrc = hover ? showing : renderProjectImg(project.title);
  return (
    <li
      className="project-item"
      style={project.appType === "mobile" ? { width: "66.66%" } : {}}
    >
      <div className="project-info col-1">
        <div className="prj-title row">{project.title}</div>
        <div className="overlay-container">
          <div className="project-refs">
            <div
              className="icon"
              style={{ marginRight: "4px" }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                <div className="p-i btn-hover-bg">
                  <i
                    className="p-i fa fa-github-square "
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
            </div>
            <div
              className="icon"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
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
      >
        <div
          className="dampener"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          style={project.appType === "mobile" ? { minWidth: "247.5px" } : null}
        />
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
