import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static.js";

const LandingPage = () => {
  const ct = contactMethods().filter((c) => c.method === "email");

  return (
    <div className="landing">
      <section className="main">
        <div className="main-content">
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
          <Contact contact={ct[0]} content={"Say Hello"} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
