import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static.js";
import { connectOutro } from "../utils/desc.js";

const ConnectPage = () => {
  const contact = contactMethods().filter((c) => c.method === "email");

  return (
    <div className="connect">
      <section className="main">
        <div className="main-content">
          <div className="row section-header">
            <h3 className="section-title-label">03.</h3>
            <h3>Expanding your network? Let's</h3>
          </div>
          <h2 className="row name">Get Connected</h2>
          <div className="row">
            <p>{connectOutro}</p>
          </div>
          <div className="connect-btn">
            <Contact contact={contact[0]} content={"Contact Me"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
