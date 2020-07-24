import React from "react";
import Sqlite from "../images/Sqlite.png";
import Javascript from "../images/Javascript.png";

const Skill = ({ skill }) => {
  const renderSkill = () => {
    if (skill) {
      switch (skill.name) {
        case "sqlite":
          return Sqlite;
        case "javascript":
          return Javascript;

        default:
          return;
      }
    }
  };
  return (
    <li key={`${skill.name}-id`} className="stack-list-item">
      <div className="skill-cont">
        {skill.name}
        <div
          className="skill-icon"
          style={{ backgroundImage: `url(${renderSkill()})` }}
        />
      </div>
    </li>
  );
};
export default Skill;
