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
    <div className="tech-skills-cont">
      <h3 className="section-title">My technical proficiencies...</h3>
      <ul className="skill-list">{renderSkills()}</ul>
    </div>
  );
};
export default SkillList;
