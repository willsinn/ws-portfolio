import React from "react";
import ContactList from "./ContactList";
import { stackList, projectList } from "../utils/static";
import Footer from "./Footer";

const ProjectsPage = () => {
  const renderSkills = () => {
    const skills = stackList();
    if (skills && skills.length > 0) {
      return skills.map((skill) => (
        <li key={`${skill.name}-id`} className="stack-list-item">
          <div className="horz-wrap">{skill.name}</div>
        </li>
      ));
    }
  };
  const renderProjects = () => {
    const projects = projectList();
    if (projects && projects.length > 0) {
      return projects.map((project) => (
        <li key={`${project.title}-id`} className="project-item">
          <div className="horz-wrap">
            <div className="prj-i-left col-1">{project.img}</div>
            <div className="prj-i-right col-1">
              <div className="prj-title">{project.title}</div>
              <a href="/link" className="prj-link">
                {project.link}
              </a>
              <div className="prj-desc">{project.desc}</div>
            </div>
          </div>
        </li>
      ));
    }
  };

  return (
    <div className="projects">
      <div className="name-cont">
        <h1>William Sinn</h1>
        <h3>Fullstack Software Engineer</h3>
      </div>
      <ContactList />

      <div className="section-divider">
        <div className="section-header">
          <div className="section-header-cont">
            <span className="section-title">Technical Stack</span>
          </div>
          <div className="section-horz-line"></div>
        </div>
        <div className="row-1 pg-section">
          <div className="tech-skills-cont">
            <ul>{renderSkills()}</ul>
          </div>
        </div>
      </div>

      <div className="pg-section">
        <div className="row-2">
          <ul className="col-1">{renderProjects()}</ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
