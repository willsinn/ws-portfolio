import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static.js";

const ConnectPage = () => {
  const contacts = contactMethods();
  const emailContact = contacts.filter((c) => c.method === "email");

  const renderEmail = () => {
    debugger;
  };

  return (
    <div className="connect">
      <section className="main">
        <div className="main-content">
          <div className="section-header">
            <h3 className="section-title-label">03.</h3>

            <h3>Expanding your network? Lets</h3>
          </div>
          <h2 className="name">Get connected</h2>
          <div className="row col-1">
            <p>
              I'm currently looking for opportunities that highlight my skillset
            </p>
          </div>

          <div className="resume navbar-btn">
            <span className="resume active-link">
              <Contact contact={emailContact[0]} orient={"vertical"} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
