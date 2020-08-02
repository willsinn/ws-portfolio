import React from "react";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import HexagonGrid from "./containers/HexagonGrid";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <HexagonGrid />

      <div className="sider contact-links">
        <ContactList orient={"vertical"} />
      </div>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <WorkPage />
    </div>
  );
};

export default App;
