import React, { useState } from "react";
import ProjectList from "./ProjectList";
import { projectList } from "../utils/static";
import SkillList from "./SkillList";

const WorkPage = () => {
  const projects = projectList();
  const [active, setActive] = useState("Wello");
  const handleRenderActive = (e, targ) => {
    if (e) {
      setActive(targ);
    }
  };
  return (
    <div className="work">
      <div className="section-header">
        <div>02.</div>
        <div>Work that I've done.</div>
      </div>
      <div className="projects-cont">
        <div className="project-section">
          <ProjectList
            projects={projects}
            active={active}
            handleRenderActive={handleRenderActive}
          />
        </div>
      </div>
      <div className="email-sider">
        <div className="email-wrap">
          <div className="fixed-email">w.h.sinn@gmail.com</div>
        </div>
      </div>

      <SkillList />
    </div>
  );
};

export default WorkPage;
