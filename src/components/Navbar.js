import React from "react";
import { resumeUrl, contactMethods } from "../utils/static.js";

const navItems = ["landing", "work", "contact"];

const Navbar = () => {
  const ct = contactMethods().filter((c) => c.method === "email");

  const renderNavItems = () => {
    let counter = 0;
    return navItems.map((item) => {
      counter++;
      return (
        <div className="navbar-btn" key={`item-${counter - 1}`}>
          <span className="nav-num">⌬</span>
          <span
            className="active-link"
            onClick={(e) => scrollToTarget(e, item)}
          >
            {item}
          </span>
        </div>
      );
    });
  };
  const scrollToTarget = (e, item) => {
    if (e) {
      const target = document.getElementsByClassName(`${item}`);
      if (target[0]) {
        return target[0].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  return (
    <div className="nav-wrap">
      <div className="navbar">
        <a href={`${resumeUrl}`} target="_blank" rel="noopener noreferrer">
          <div className="resume navbar-btn">
            <span className="resume active-link">resume</span>
          </div>
        </a>
        <div className="horz-wrap">{renderNavItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
