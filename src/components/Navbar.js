import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
