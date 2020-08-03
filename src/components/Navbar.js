import React from "react";
import { Link } from "react-router-dom";

const navItems = ["about", "work", "contacts"];

const Navbar = ({ show }) => {
  const renderNavItems = () => {
    let counter = 0;
    return navItems.map((item) => {
      counter++;
      return (
        <div className="navbar-btn">
          <span className="nav-num">0{counter}.</span>
          <Link className="active-link" to={`/${item}`}>
            {item}
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="nav-wrap" style={show ? { top: "0" } : { top: "-70px" }}>
      <div className="navbar">
        <div>LOGO PLACEHOLDER</div>
        <div className="horz-wrap">{renderNavItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
