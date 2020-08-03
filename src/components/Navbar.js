import React from "react";

const navItems = ["about", "work", "contacts"];

const Navbar = ({}) => {
  const renderNavItems = () => {
    let counter = 0;
    return navItems.map((item) => {
      counter++;
      return (
        <div className="navbar-btn">
          <span className="nav-num">0{counter}.</span>
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
        <div>RESUME</div>
        <div className="horz-wrap">{renderNavItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
