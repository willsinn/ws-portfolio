export const stackList = () => {
  const arr = [
    { name: "JavaScript (ES6)" },
    { name: "Ruby" },
    { name: "ReactJS" },
    { name: "Ruby on Rails" },
    { name: "Redux" },
    { name: "React Redux" },
    { name: "React Router" },
    { name: "React Hooks" },
    { name: "HTML & CSS" },
  ];
  return arr;
};

export const projectList = () => {
  const arr = [
    {
      title: "Wello",
      link: "http://ec2-54-92-207-170.compute-1.amazonaws.com",
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
        "AwS EC2",
        "Nginx",
        "Phusion Passenger",
      ],
      git: "https://github.com/willsinn/frontend-wello",
    },
    {
      title: "Swimmy Otter",
      link: "http://swimmyotter.ml",
      linkAlt: "http://ec2-54-83-167-110.compute-1.amazonaws.com",
      img: "../images/swimmyotter.png",
      desc:
        "An otter themed game where you dodge incoming logs and pick up power ups to survive. High scores are recorded and ranked on an app leaderboard.",
      appType: "game",
      stack: [
        "Javascript",
        "EaselJS",
        "Rails",
        "AwS EC2",
        "Nginx",
        "Phusion Passenger",
      ],
      git: "https://github.com/willsinn/swimmyotter-frontend",
    },
    {
      title: "Bus Comparer",
      link: "http://buscomparer.tk",
      img: "../images/buscomparer.png",
      desc:
        "A web app to help you compare coach bus ticket avaliability and prices. This includes saving favorites as well as direct purchase links.",
      appType: "web",
      stack: ["React", "React-Router", "Rails", "Heroku", "JwT"],
      git: "https://github.com/willsinn/frontend-bus-comparer",
    },
    {
      title: "Zombie Diner",
      link: "http://zombiediner.tk",
      img: "../images/zombiediner.png",
      desc:
        "A phone app where you match recipes to complete all orders before the time runs out.",
      appType: "mobile",
      stack: ["React", "Redux", "React Redux", "Rails", "Heroku"],
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
  "https://drive.google.com/file/d/1cU-UFIfJc9B6u0QrtgSKimOqO6T46OBM/view";
