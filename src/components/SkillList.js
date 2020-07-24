import React from "react";
import { stackList, projectList, abtBrand } from "../utils/static";

const SkillList = () => {
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
  return (
    <div className="tech-skills-cont">
      <ul>{renderSkills()}</ul>
    </div>
  );
};
export default SkillList;
