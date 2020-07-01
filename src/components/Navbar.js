import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-btn">
        <span className="navbar-name">William Sinn</span>
      </div>
      <div className="horz-wrap">
        <div className="navbar-btn">
          <Link to="/about">about</Link>
        </div>
        <div className="navbar-btn">
          <Link to="/projects">projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
