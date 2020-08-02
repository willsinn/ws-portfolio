import React from "react";

const Skill = ({ skill }) => {
  const icnStyle = { color: "var(--txt-yw)" };
  const txtStyle = { color: "var(--txt-wht)", marginLeft: "4px" };
  return (
    <li className="skill-item" key={`${skill.name}-id`}>
      <div>
        <span style={icnStyle}>⎖</span>
        <span style={txtStyle}>{skill.name}</span>
      </div>
    </li>
  );
};
export default Skill;
