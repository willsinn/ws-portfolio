import React from "react";

const navItems = ["about", "work", "contacts"];

const Navbar = ({ show }) => {
  const renderNavItems = () => {
    let counter = 0;
    return navItems.map((item) => {
      counter++;
      return (
        <div className="navbar-btn">
          <span className="nav-num">0{counter}.</span>
          <div className="active-link" onClick={(e) => scrollToTarget(e, item)}>
            {item}
          </div>
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
    <div className="nav-wrap" style={show ? { top: "0" } : { top: "-84px" }}>
      <div className="navbar">
        <div>RESUME</div>
        <div className="horz-wrap">{renderNavItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
