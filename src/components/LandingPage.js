import React from "react";

const LandingPage = ({ handleOverrideTimer }) => {
  return (
    <div className="landing" onMouseEnter={(e) => handleOverrideTimer(e)}>
      <section className="main">
        <div>
          <h1>Hi, my name is.</h1>
          <h2 className="name">William Sinn</h2>
          <h3>
            <span>Fullstack Software Engineer</span>
          </h3>
          <div>
            <p>
              I'm a software engineer based in Boston, MA specializing in
              building (and occasionally designing) exceptional websites,
              applications, and everything in between.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
