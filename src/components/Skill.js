import React from "react";
import Sqlite from "../images/sqlite.png";

const Skill = ({ skill }) => {
  return (
    <li key={`${skill.name}-id`} className="stack-list-item">
      <div className="skill-cont">
        {skill.name}
        <div
          className="skill-icon"
          style={{ backgroundImage: `url(${Sqlite})` }}
        />
      </div>
    </li>
  );
};
export default Skill;
