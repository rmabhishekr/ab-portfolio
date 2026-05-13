import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-1.png";
import PROJECT_IMG_3 from "../assets/images/project-1.png";
import PROJECT_IMG_4 from "../assets/images/project-1.png";
import PROJECT_IMG_5 from "../assets/images/project-1.png";
import PROJECT_IMG_6 from "../assets/images/project-1.png";
import PROJECT_IMG_7 from "../assets/images/project-1.png";

export const SKILLS_CATEGORIES = [
  {
    title: "Backend",
    icon: Server,
    description: "Build robust server-side applications.",
    skills: [
      { name: "Java", level: 95, color: "bg-blue-500" },
      { name: "Spring Boot", level: 90, color: "bg-green-500" },
      { name: "Rest APIs", level: 95, color: "bg-gray-900" },
      { name: "Hibernate/JPA", level: 95, color: "bg-indigo-600" },
      { name: "JWT Token", level: 85, color: "bg-gray-500" },
      { name: "Python", level: 60, color: "bg-yellow-500" },
      { name: "FastAPI", level: 65, color: "bg-cyan-500" },
      { name: "Microservices", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    description: "Create beautiful and responsive user interfaces.",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "JavaScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
      { name: "Streamlit", level: 85, color: "bg-red-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Manage and query data efficiently.",
    skills: [
      { name: "MySQL", level: 95, color: "bg-blue-600" },
      { name: "MongoDB", level: 90, color: "bg-green-800" },
      { name: "PostgreSQL", level: 85, color: "bg-blue-800" },
      { name: "Oracle SQL", level: 85, color: "bg-red-700" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploy and manage applications in the cloud.",
    skills: [
      { name: "Docker", level: 80, color: "bg-blue-600" },
      { name: "AWS", level: 75, color: "bg-orange-600" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 80, color: "bg-purple-600" },
    ],
  },
  {
    title: "Tools",
    icon: Zap,
    description: "Development tools and IDEs for productivity.",
    skills: [
      { name: "VS Code", level: 95, color: "bg-blue-500" },
      { name: "IntelliJ IDEA", level: 90, color: "bg-gray-800" },
      { name: "Postman", level: 90, color: "bg-orange-500" },
      { name: "GitHub", level: 95, color: "bg-gray-900" },
      { name: "Jira", level: 85, color: "bg-blue-700" },
      { name: "Linux", level: 80, color: "bg-yellow-600" },
    ],
  },
];

export const SKILLS_CATEGORY = SKILLS_CATEGORIES;

export const TECH_STACK = [
  "Java",
  "Spring-Boot",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "JavaScript",
  "Python",
  "FastAPI",
  "Streamlit",
  "MySQL",
  "MongoDB",
  "Oracle SQL",
  "Docker",
  "AWS",
  "VS Code",
  "GitHub",
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "4+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Chat With CSV",
    description:
      "A chat application that allows users to interact with CSV files.",
    image: PROJECT_IMG_1,
    tags: ["Python", "Streamlit", "OpenAI API"],
    liveUrl: "#",
    githubUrl: "https://github.com/rmabhishekr/public-api-gateway-app",
    featured: false,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Blog App with AI Post Generator",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    image: PROJECT_IMG_2,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack Development",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "A comprehensive system to manage hospital operations and patient records.",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web Development",
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    image: PROJECT_IMG_4,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web Application",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2019",
    title: "BTech in Computer Science & Engineering",
    company: "Babu Banarasi Das Institute of Technology",
    description: "Graduated with a degree in Computer Science and Engineering.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2019",
    title: "Started Training",
    company: "ABC For Technology Training",
    description: "Completed a training program in Java and Testing.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2019",
    title: "Started Coding Journey",
    company: "Self-taught",
    description: "Began learning programming languages and web development.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2020",
    title: "Test Engineer",
    company: "Freelance",
    description:
      "Worked as a Test Engineer, gaining experience in software testing.",
    icon: Briefcase,
    color: "bg-red-500",
  },
  {
    year: "2022",
    title: "Java Developer",
    company: "Shivila Technologies Pvt. Ltd.",
    description: "Worked as a Java Developer, focusing on backend development.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2023",
    title: "Software Engineer",
    company: "Prodapt Solutions",
    description:
      "Worked as a Software Engineer, enhancing my skills in full-stack development.",
    icon: Zap,
    color: "bg-red-500",
  },
  {
    year: "2023-present",
    title: "Software Engineer",
    company: "Grithika Labs India Pvt. Ltd.",
    description:
      "Currently working as a Software Engineer, focusing on full-stack development.",
    icon: Rocket,
    color: "bg-orange-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description:
      "I am passionate about creating user-friendly interfaces that enhance the overall user experience.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description:
      "I enjoy tackling complex problems and finding efficient solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "I believe in lifelong learning and constantly improving my skills.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/rmabhishekr",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/raiabhishekrm",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500",
  },
  {
    name: "Email",
    icon: Mail,
    url: "rmeer.abhi@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rmeer.abhi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7760167791",
  },
];
