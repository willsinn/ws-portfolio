import React from "react";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <AboutPage />
      <ProjectsPage />
    </div>
  );
};

export default App;
