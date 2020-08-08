import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static.js";
import { connectParagraph } from "../utils/desc.js";

const ConnectPage = () => {
  const contact = contactMethods().filter((c) => c.method === "email");

  return (
    <div className="connect">
      <section className="main">
        <div className="main-content">
          <div className="section-header">
            <h3 className="section-title-label">03.</h3>
            <h3>Expanding your network? Let's</h3>
          </div>
          <h2 className="name">Get Connected</h2>
          <div className="row col-1">
            <p>
              As a person who believes in collaborative solutions, I'm currently
              looking to join and compliment a developer team.
            </p>
          </div>
          <Contact contact={contact[0]} content={"Contact Me"} />
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
