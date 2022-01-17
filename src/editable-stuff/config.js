// Navigation Bar SECTION

const navBar = {
  show: true,
};

// Main Body SECTION

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Piyush",
  middleName: "",
  lastName: "Harsh",
  message: " Learning to teach machines common sense! 🤖 ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/piyush-harsh-15",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/piyush0102/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/piyush_15/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/piyush-harsh/",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@piyushharsh15",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Me_Piyush0_0",
    },
  ],
};

// ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/piyush.jpg"),
  imageSize: 375,
  message:
    "Hello, I'm Piyush Harsh, a Pre-Final Year Student @ BIT Sindri, Dhanbad. I am very much interested in data related projects alongside with inclination in applied machine learning.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "piyush-harsh-15", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["Tutor-AI", "Flipkart-Scrapy", "Cat-Fact", "Sentiment-Analysis"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/piyush.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/piyush.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "SQL", value: 75 },
    { name: "C", value: 80 },
    { name: "JavaScript", value: 70 },
    { name: "HTML/CSS", value: 70 },
    { name: "Flask", value: 60 },
    { name: "MATLAB", value: 70 },
    { name: "Machine Learning", value: 70 },
    { name: "Adobe Illustrator", value: 90 },
    { name: "Adobe Photoshop", value: 75 },
    { name: "Adobe Aftereffects", value: 60 },
    { name: "Adobe XD", value: 80 },
  ],
  softSkills: [
    { name: "Creative Writing", value: 80 },
    { name: "Content Writing", value: 90 },
    { name: "Leadership", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Team Work", value: 90 },
    { name: "Graphic Designing", value: 90 },
    { name: "Communication Skills", value: 85 },
    { name: "Managerial Skills", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Machine Learning or Data Science opportunities! If you know of any positions available, if you have any queries, or if you just want to say hi, please feel free to email me at",
  email: "contact.piyushharsh@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      date: 'May 2017 – May 2018',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
