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
          <div className="name">William Sinn</div>
          <div className="row">
            <p>{landingIntro}</p>
          </div>
          <div className="connect-btn">
            <Contact
              key={`landing-${ct[0].method}-1`}
              contact={ct[0]}
              content={"Say Hello"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
