import React, { useState } from "react";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";

import "./App.css";

const App = () => {
  const [show, setShow] = useState(true);
  const handleHideNav = (e) => {
    if (e) {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }
  };
  const handleOverrideTimer = (e) => {
    if (e) {
      setShow(true);
      setTimeout(() => setShow(true), 4000);
    }
  };
  return (
    <div className="app">
      <div className="app-side-liners" />
      <div className="app-content">
        <Navbar show={show} />
        <LandingPage handleOverrideTimer={handleOverrideTimer} />
        <AboutPage handleHideNav={handleHideNav} />
        <WorkPage handleHideNav={handleHideNav} />
      </div>
      <div className="app-side-liners">
        <div className="sider-container">
          <div className="contact-links">
            <ContactList orient={"vertical"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
