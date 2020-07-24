import React from "react";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch> */}
      <AboutPage />

      <ProjectsPage />
    </div>
  );
};

export default App;
