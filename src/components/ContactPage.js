import React from "react";
import Contact from "./Contact";
import { contactMethods } from "../utils/static.js";
import { connectOutro } from "../utils/desc.js";

const ContactPage = () => {
  const contact = contactMethods().filter((c) => c.method === "email");

  return (
    <div className="contact">
      <section className="main">
        <div className="main-content">
          <div className="row section-header">
            <h2
              className="row name section-title-label"
              style={{ fontSize: "68px" }}
            >
              ⌬
            </h2>
            <h2 className="row name" style={{ marginLeft: "3.5%" }}>
              Get Connected
            </h2>
          </div>

          <div className="row">
            <p>{connectOutro}</p>
          </div>
          <div className="connect-btn">
            <Contact
              key={`connect-${contact[0].method}-1`}
              contact={contact[0]}
              content={"Contact Me"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
