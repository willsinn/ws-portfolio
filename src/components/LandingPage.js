import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="name-cont">
        <div className="name">William Sinn</div>
        <span>Fullstack Software Engineer</span>
      </div>
    </div>
  );
};

export default LandingPage;
