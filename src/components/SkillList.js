import React from "react";
import Skill from "./Skill";
import { stackList } from "../utils/static";

const SkillList = () => {
  const renderSkills = () => {
    const skills = stackList();
    if (skills && skills.length > 0) {
      return skills.map((skill) => (
        <Skill key={`dataid-${skill.name}`} skill={skill} />
      ));
    }
  };

  return (
    <div style={{ margin: "0 0 60px 80px" }}>
      <div className="col-1 tech-skills-cont">
        <span className="skill-title">technology I'm good at...</span>
        <ul className="skill-list">{renderSkills()}</ul>
      </div>
    </div>
  );
};
export default SkillList;
