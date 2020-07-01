import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-btn">
        <Link className="active-link" to="/about">
          William Sinn
        </Link>
      </div>
      <div className="horz-wrap">
        <div className="navbar-btn">
          <a href="resume-link" className="active-link">
            resume
          </a>
        </div>
        <div className="navbar-btn">
          <Link className="active-link" to="/about">
            about
          </Link>
        </div>
        <div className="navbar-btn">
          <Link className="active-link" to="/projects">
            projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
