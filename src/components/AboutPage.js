import React from "react";

const AboutPage = () => {
  const renderSlogan = () => {
    return "Short slogan, brand.";
  };
  return (
    <div className="about">
      <div className="top-section">
        <div className="picture-cont">
          <div className="picture"></div>
        </div>
        <div className="slogan-cont">
          <p className="slogan-text">{renderSlogan()}</p>
        </div>
      </div>
      About pgs
    </div>
  );
};

export default AboutPage;
