import React from "react";

const Skill = ({ skill }) => {
  return (
    <li key={`${skill.name}-id`} className="stack-list-item">
      <div className="skill-cont">{skill.name}</div>
    </li>
  );
};
export default Skill;
