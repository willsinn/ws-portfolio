import React from "react";

const AboutPage = () => {
  const brand = "Short slogan, brand.";
  const summary =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
  return (
    <div className="about">
      <div className="abt-top pg-section">
        <div className="picture-cont">
          <div className="picture-img"></div>
        </div>
        <div className="slogan-cont">
          <p className="slogan-text">{brand}</p>
        </div>
      </div>

      <div className="pg-section">
        <div className="abt-bottom horz-wrap">
          <div className="summary-cont">
            <p className="summary-text">{summary}</p>
          </div>
          <div className="contacts-cont">
            <div className="contacts-header">Contacts</div>
            <ul className="contacts-list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
