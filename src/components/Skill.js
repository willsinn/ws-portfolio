import React from "react";
import Sqlite from "../images/Sqlite3.png";
import Javascript from "../images/Javascript.png";
import Ruby from "../images/Ruby.png";
import ReactJS from "../images/ReactJS.png";
import Rails from "../images/Rails.png";
import Redux from "../images/Redux.png";
import ReactRedux from "../images/ReactRedux.png";
import Sql from "../images/Sql.png";
import Postgresql from "../images/Postgresql.png";
import Aws from "../images/Aws.png";

const Skill = ({ skill }) => {
  const renderSkill = () => {
    if (skill) {
      switch (skill.name) {
        case "sqlite":
          return Sqlite;
        case "javascript":
          return Javascript;
        case "ruby":
          return Ruby;
        case "reactjs":
          return ReactJS;
        case "rails":
          return Rails;
        case "redux":
          return Redux;
        case "reactredux":
          return ReactRedux;
        case "sql":
          return Sql;
        case "postgresql":
          return Postgresql;
        case "aws":
          return Aws;
        default:
          return;
      }
    }
  };
  return (
    <li key={`${skill.name}-id`}>
      <div
        className="skill-icon"
        style={{ backgroundImage: `url(${renderSkill()})` }}
      />
    </li>
  );
};
export default Skill;
