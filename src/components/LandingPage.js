import React from "react";
import Contact from "./Contact";
import { contactMethods, abtSummary } from "../utils/static.js";

const LandingPage = () => {
  const ct = contactMethods().filter((c) => c.method === "email");

  return (
    <div className="landing">
      <section className="main">
        <div className="main-content">
          {/* <h1>Hi, my name is.</h1> */}
          <h2 className="name">William Sinn</h2>
          <h3>
            <span>Software Engineer</span>
          </h3>
          <div>
            <p>{abtSummary()}</p>
          </div>
          <Contact contact={ct[0]} content={"Say Hello"} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
