import simpleCiphersImg from "../assets/projectimages/simpleciphers.png";
import overcheckImg from "../assets/projectimages/overcheck.png";
import libraryManagementImg from "../assets/projectimages/librarymanagement.png";
import weatherAppImg from "../assets/projectimages/weatherapp.png";

export type Project = {
  id: number;
  title: string;
  url: string;
  shortDescription: string;
  longDescription: string;
  technologies: string;
  splashimg: string;
};

export const ProjectList: Project[] = [
  {
    id: 0,
    title: "Simple Ciphers",
    url: "https://simple-ciphers.vercel.app",
    shortDescription:
      "A full stack application built to allow users to quickly and easily encrypt and decrypt messages in a variety of classical and modern cryptosystems, such as the Caesar Cipher or AES. Users can authenticate themselves utilizing Auth0, and their keys can be saved and stored into a PostgreSQL database hosted in Render.",
    longDescription: "",
    technologies:
      "Docker, Vercel, Render, NodeJS, Express, React, TypeScript, HTML, CSS, PostgreSQL, Git",
    splashimg: simpleCiphersImg,
  },
  {
    id: 1,
    title: "OverCheck",
    url: "https://github.com/HammyLA/OverwatchDataWebsite",
    shortDescription: `A React application written in JavaScript that allows users to quickly look up up-to-date OverWatch stats, including role or character-specific information. The OverFast API by TeKrop was used to look up user statistics.`,
    longDescription: "",
    technologies: "React, JavaScript, HTML, CSS, Git",
    splashimg: overcheckImg,
  },
  {
    id: 2,
    title: "Library Management App",
    url: "https://github.com/HammyLA/library-management-react",
    shortDescription:
      "A full stack application to simulate a library management system such as one you would find in a library. React was used to manage information display. Java Spring Boot was used to manage API calls from the user to access and create data in a MySQL database.",
    longDescription: "",
    technologies:
      "React, Spring Boot, Java, JavaScript, MySQL, HTML, Bootstrap, Git",
    splashimg: libraryManagementImg,
  },
  {
    id: 3,
    title: "Weather Web Application",
    url: "https://github.com/Ohhaseeb/weather-app",
    shortDescription:
      "A simple front-end weather application created as a group project with a partner for CS 152 (Programming Paradigms). For the class, this project presented Object Oriented principles through atomic design of the pages and components. It was created using NextJS, TypeScript, and OpenWeatherAPI and presents weather, time of day, and future forecasts for users in their respective locations.",
    longDescription: "",
    technologies: "NextJS, OpenWeatherAPI, HTML, Tailwind CSS, Git",
    splashimg: weatherAppImg,
  },
];
