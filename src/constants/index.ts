import { HomeIcon, PersonIcon, DashboardIcon, ClipboardIcon } from "@radix-ui/react-icons";
import {FaInstagram, FaFacebook, FaDiscord} from "react-icons/fa";

export const SkillData = [
  {
    name: "Problem Solving",
    Image: "/probsol.svg",
    width: 80,
    height: 80,
    level:3,
  },
  {
    name: "Public Speaking",
    Image: "/pubspeak.svg",
    width: 80,
    height: 80,
    level:3.5,
  },
  {
    name: "Spring Boot",
    Image: "/spring.svg",
    width: 80,
    height: 80,
    level:4,
  },
  {
    name: "Database",
    Image: "/database.svg",
    width: 80,
    height:  30,
    level:3,
  },
  {
    name: "NestJS",
    Image: "/nestjs.svg",
    width: 80,
    height: 80,
    level:3,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src:"/linkedin.svg",
    href:"https://www.linkedin.com/in/tiarayu/",
  },
  {
    name: "Github",
    src:"/github.svg",
    href:"https://github.com/TiaraYu8",
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
  },
];

export const Projects = [
  {
    title: "HonesTest Application",
    text: "The application is developed for computer-based assessments with integrated visual-based proctoring.Utilizing Kanban Framework, application has been implemented utilizing NestJS, NextJS, ElectronJS and MediaPipe.",
    src: "/project1.png",
    sourceCodeLink: "#!", // Link GitHub atau sumber kode lainnya
  },
  {
    title: "Campus Admission Website",
    text: "This website is built for providing all information about student admission of Institut Teknologi Del. Collaborate with scrum team to Implement the CRUD’s logic into code using Laravel Framework. ",
    src: "/project2.png",
    sourceCodeLink: "#!", // Link GitHub atau sumber kode lainnya
  },
  {
    title: "Faculty Work Plan and Evaluation Application",
    text: "This application facilitates the submission and management of faculty work plans and performance evaluations. Developed in microservices utilizing Laravel",
    src: "/pro.png",
    sourceCodeLink: "#!", // Link GitHub atau sumber kode lainnya
  },
  {
    title: "Del Attandace System",
    text: "The application is developed for helping managing the data Attendance and digitalize the recording Attendance. Implemented  the design to the GUI using Java programming language.",
    src: "/project0.png",
    sourceCodeLink: "#!", // Link GitHub atau sumber kode lainnya
  },
];


export const NavLinks = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/",
  },
  {
    name: "My Skills",
    icon: PersonIcon,
    link: "/my-skills",
  },
  {
    name: "My Projects",
    icon: DashboardIcon,
    link: "/my-projects",
  },
  {
    name: "Contact Me",
    icon: ClipboardIcon,
    link: "/contact-me",
  },
];

export const Journey = [
  {
    year: "2021 - 2025",
    title: "Del Institute of Technology",
    description:
      "Chair of Del English Club.;Member of Student Executive Board.;Master of Ceremony on English Workshop with Dr. Mark Fraser from the University of Wollongong.;Teaching Assistance Part Time at Institute Technology Del Operating System Course."
    ,
  },
  {
    year: "Jun 2024 - Aug 2024",
    title: "FIFGROUP",
    description: "Backend Engineer Intern;Developed backend service with Spring Boot.;Implemented high-speed big data streaming utilizing Kafka Stream.",
  },
  {
    year: "Sep 2024 - Jan 2025",
    title: "PT Indonesia Air Asia",
    description: "Software Engineer Intern; Building microservice web application utlizing Flask;Deploying codes utilizing GCP",
  },
];
