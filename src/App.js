import React from "react";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <LandingPage />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
};

export default App;
