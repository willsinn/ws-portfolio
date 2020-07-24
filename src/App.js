import React from "react";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <AboutPage />
      <ProjectsPage />
    </div>
  );
};

export default App;
