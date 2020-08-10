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
      title: "Swimmy Otter",
      link: "http://ec2-54-83-167-110.compute-1.amazonaws.com",
      img: "../images/buscomparer.png",
      desc:
        "An otter themed game where you dodge incoming logs and pick up power ups to survive. High scores are recorded and ranked on an app leaderboard.",
      appType: "game",
      stack: ["Javascript", "EaselJS", "Rails"],
      git: "https://github.com/willsinn/swimmyotter-frontend",
    },
    {
      title: "Bus Comparer",
      link: "https://buscomparer.herokuapp.com",
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

export const resumeUrl =
  "https://docs.google.com/document/d/1MA2CdDaYlZhHS0VYYi5gMwJHJu2pYT7VMG-P9Ea1EJ4/edit";
