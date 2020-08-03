export const abtBrand = () => {
  const txt = "Data driven, innovative thinker.";
  return txt;
};

export const abtSummary = () => {
  const txt =
    "Welcome! I'm Will, a software engineer based in NYC. As someone who enjoys self-optimization, I fell in love with the idea that a solution in code can always be made better.";
  return txt;
};
export const abtMission = () => {
  const txt =
    "My mission is to improve user experience through simplicity and intuitive design while optimizing the product codebase. Using data points to precisely upgrade weakpoints has always been a strong suit of mine and I intend to build on it!";
  return txt;
};
export const stackList = () => {
  const arr = [
    { name: "JavaScript(ES6)" },
    { name: "Ruby" },
    { name: "ReactJS" },
    { name: "Ruby on Rails" },
    { name: "Redux" },
    { name: "React Redux" },
    { name: "React Router" },
    { name: "NodeJS" },
    { name: "React useState-Hook" },
    { name: "React useEffect-Hook" },
    { name: "SQL" },
    { name: "POSTGRESql" },
    { name: "MySQL" },
    { name: "Sqlite" },
    { name: "AWS-EC2" },
    { name: "AWS-Amplify" },
    { name: "AWS-Lambda" },
    { name: "AWS-Route53" },
    { name: "AWS-CloudFront" },
    { name: "AWS-S3" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Nginx" },
    { name: "Apache" },
    { name: "Phusion Passenger" },
    { name: "EaselJS" },
  ];
  return arr;
};

export const projectList = () => {
  const arr = [
    {
      title: "Wello",
      link: "http://ec2-52-86-173-242.compute-1.amazonaws.com",
      img: "../images/mywellotask.png",
      desc:
        "A web app to help you manage, track and organize tasks and goals, using labels, checklists, lists and boards.",
      appType: "web",
      stack: [
        "React",
        "Redux",
        "React-Hooks",
        "React-Redux",
        "Rails",
        "AWS-EC2",
      ],
      git: "https://github.com/willsinn/frontend-wello",
    },
    {
      title: "Bus Comparer",
      link: "https://bus-comparer.herokuapp.com",
      img: "../images/buscomparer.png",
      desc:
        "A web app to help you compare coach bus ticket avaliability and prices. This includes saving favorites as well as direct purchase links.",
      appType: "web",
      stack: ["React", "React-Router", "Rails", "Heroku"],
      git: "https://github.com/willsinn/frontend-bus-comparer",
    },
    {
      title: "Zombie Diner",
      link: "https://zombie-diner.herokuapp.com",
      img: "../images/zombiediner.png",
      desc:
        "A phone app where you match recipes to complete all orders before the time runs out.",
      appType: "mobile",
      stack: ["React", "Redux", "React Redux", "Ruby on Rails", "Heroku"],
      git: "https://github.com/willsinn/zombie-diner-front-end",
    },
  ];
  return arr;
};

export const contactMethods = () => {
  const arr = [
    {
      method: "email",
      link: "w.h.sinn@gmail.com",
    },
    {
      method: "linkedin",
      link: "https://www.linkedin.com/in/will-sinn",
    },
    {
      method: "instagram",
      link: "https://www.instagram.com/advansinnnn",
    },
    {
      method: "github",
      link: "https://github.com/willsinn",
    },
  ];
  return arr;
};
