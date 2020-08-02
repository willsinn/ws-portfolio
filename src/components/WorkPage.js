import React from "react";
import ProjectList from "./ProjectList";
import SkillList from "./SkillList";

const WorkPage = () => {
  return (
    <div className="work">
      <div className="section-header">
        <div>02.</div>
        <div>Work that I've done.</div>
      </div>
      <div className="work-content row">
        <ProjectList />
        <SkillList />
      </div>
      <div className="email-sider">
        <div className="email-wrap">
          <div className="fixed-email">w.h.sinn@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
