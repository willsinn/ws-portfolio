import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static.js";
import { landingIntro } from "../utils/desc.js";

const LandingPage = () => {
  const ct = contactMethods().filter((c) => c.method === "email");

  return (
    <div className="landing">
      <section className="main">
        <div>
          <h2 className="name">William Sinn</h2>
          <h3>
            <span>Software Engineer</span>
          </h3>
          <div>
            <p>{landingIntro}</p>
          </div>
          <Contact key={"landing-1"} contact={ct[0]} content={"Say Hello"} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
