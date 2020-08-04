import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static.js";

const ConnectPage = () => {
  const contacts = contactMethods();

  const renderEmail = () => {
    const email = contacts.filter((contact) => contact.method === "email");
    return <Contact email={email} />;
  };

  return (
    <div className="connect">
      <section className="main">
        <div>
          <span className="nav-num">03.</span>
          <span>Expanding your network? Lets</span>
        </div>
        <h3>Get in touch</h3>
        <div>
          <p>
            As a person who weighs solutions, I'm currently looking for
            opportunities to solve complex problems for people who think
            straight.
          </p>
        </div>

        <div className="resume navbar-btn">
          <span className="resume active-link">
            <ul>{renderEmail()}</ul>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
