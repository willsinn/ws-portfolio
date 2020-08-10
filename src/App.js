import React from "react";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ContactPage from "./components/ContactPage";

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
        <ContactPage />
      </div>
      <div className="app-side-liners">
        <div className="sider-container">
          <div className="contact-links">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
