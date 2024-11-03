import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  ecommerce,
  medschedulous,
  Helthcare,

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "SSLC",
    company_name: "The National IT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2018 - March 2019",
    points: [
      "I completed my SSLC in the State Board with an impressive score of 94%.",
      "Demonstrating my commitment to academic excellence from an early stage.", 
      "This achievement reflects my strong work ethic, attention to detail.",
      "Dedication to learning, laying a solid foundation for my future academic and professional pursuits.",
    ],
  },
  {
    title: "HSC",
    company_name: "The National IT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2020 - March 2021",
    points: [
      "I completed my HSC in the State Board with a remarkable score of 93%.",
      "Building on my academic achievements and further enhancing my knowledge and skills.",
      "This accomplishment reflects my dedication, perseverance.",
      "Passion for learning, motivating me to excel in all my future academic and professional endeavors.",
    ],
  },
  
  {
    title: "Information Technology",
    company_name: "Saveetha Engineering College",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "November 2021 - june 2025",
    points: [
      "I have completed a degree in Information Technology from Saveetha Engineering College.",
      "My education has provided me with a solid foundation in IT, equipping me with the technical expertise",
      "And problem-solving skills necessary to tackle real-world challenges effectively.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I participated in the IBM Z Datathon as part of a team and worked on projects focused on crop yield production.",
    
  },
  {
    testimonial:
      "I attended a training program provided by ICT Academy on Microsoft Azure, where I gained hands-on experience with the platform.",
    
  },
  {
    testimonial:
      "I participated in the AWS Cloud Practitioner workshop by our college.",

  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "Everlasting is a dynamic web-based e-commerce platform that empowers users to explore, purchase, and manage a diverse array of products from various vendors.",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "MedSchedulous",
    description:
      "Medschedulous is an innovative platform designed to streamline the process of scheduling doctor appointments. It connects patients with healthcare providers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: medschedulous,
    source_code_link: "https://github.com/",
  },
  {
    name: "Health care",
    description:
      "This backend system for a healthcare project facilitates essential CRUD operations for managing patient records. It allows to efficiently manage the patient profiles.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: Helthcare,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
