import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-btn">
        <span className="navbar-name">William Sinn</span>
      </div>
      <ul>
        <li>
          <div className="navbar-btn">
            <Link to="/about">about</Link>
          </div>
        </li>
        <li>
          <div className="navbar-btn">
            <Link to="/projects">projects</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
