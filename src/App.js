import React from "react";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ConnectPage from "./components/ConnectPage";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app-side-liners" />
      <div className="app-content">
        <Navbar />
        <LandingPage />
        <AboutPage />
        <WorkPage />
        <ConnectPage />
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
