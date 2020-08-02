import React from "react";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <LandingPage />
      <AboutPage />
      <WorkPage />
    </div>
  );
};

export default App;
