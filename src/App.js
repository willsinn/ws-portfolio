import React, { useState } from "react";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";

import "./App.css";

const App = () => {
  const [show, setShow] = useState(true);
  const handleHideCountdown = (e) => {
    if (e) {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }
  };
  console.log(show);
  return (
    <div className="app">
      <div className="sider contact-links">
        <ContactList orient={"vertical"} />
      </div>
      <Navbar show={show} />
      <LandingPage />

      <div
        onMouseEnter={(e) => handleHideCountdown(e)}
        style={{ height: "fit-content", width: "fit-content" }}
      >
        <AboutPage />
        <WorkPage />
      </div>
    </div>
  );
};

export default App;
