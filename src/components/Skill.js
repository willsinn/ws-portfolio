import React from "react";

const Skill = ({ skill }) => {
  return (
    <li className="skill-item" key={`${skill.name}-id`}>
      <div className="bullet-wrap">
        <span className="bullet-pt">⎖</span>
      </div>

      <span className="skill-text">{skill.name}</span>
    </li>
  );
};
export default Skill;
