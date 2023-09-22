import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  // figma,
  // docker,
  CJMeals,
  ExpenseTracker,
  freeX,
  Pandas,
  Numpy,
  // threejs,
  MaterialUI,
  Antdesign,
  firebase,
  twitter,
  linkedin,
  instagram,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Social Media Manager",
    icon: creator,
  },
];

const technologies = [
  //commented tech are those i'm still learning
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MaterialUI",
    icon: MaterialUI,
  },
  {
    name: "Antdesign",
    icon: Antdesign,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Numpy",
    icon: Numpy,
  },
  {
    name: "Pandas",
    icon: Pandas,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];




const projects = [
  {
    name: "CJ MEALS",
    description:
      "Web-based platform that allows users Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: CJMeals,
    source_code_link: "https://github.com/CJCODESgit/food-order-app",
    website: "https://cjmeals.netlify.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "Basic Expense Tracker Web application that enables users  to keep track of your spending and savings and filter them and view a chart that shows how much spent each month",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: ExpenseTracker,
    source_code_link: "https://github.com/CJCODESgit/Expense-Tracker",
    website: "https://cjexpensetracker.netlify.app/",
  },
  {
    name: "Free-X",
    description:
      " We assess transaction efficiency, security, and fees for both crypto and traditional methods. Empowering your freelancing with seamless, confident transactions",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: freeX,
    source_code_link: "https://github.com/CJCODESgit/Free-X",
    website: "https://free-x.netlify.app/",
  },
];

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/cjcodes_/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/CJCODES_",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/john-covenant-amos/",
  },
  {
    id: "social-media-5",
    icon: github,
    link: "https://github.com/CJCODESgit",
  },
];

export { services, technologies, projects, socialMedia };