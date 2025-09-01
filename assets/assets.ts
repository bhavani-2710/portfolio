import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import git from "./git.png";
import react from "./react.png";
import javascript from "./javascript.png";
import tailwindcss from "./tailwindcss.png";
import postgresql from "./postgresql.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import send_icon_white from "./send-icon-white.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import dark_bg_hero from "./dark-bg-hero.jpg";
import light_bg_hero from "./light-bg-hero.jpg";
import github from "./github.png";
import linkedin from "./linkedin.png";
import linkedin_dark from "./linkedin-dark.png";
import twitter from "./twitter.png";
import twitter_dark from "./twitter-dark.png";
import { Project, Service, Skill, Tools } from "@/types";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  git,
  react,
  tailwindcss,
  javascript,
  postgresql,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  send_icon_white,
  right_arrow_bold,
  right_arrow_bold_dark,
  dark_bg_hero,
  light_bg_hero,
  github,
  linkedin,
  linkedin_dark,
  twitter,
  twitter_dark,
};

export const workData:Project[] = [
  {
    title: "ResQall - Voice Activated SOS App",
    description:
      "A life-saving mobile application that activates emergency protocols through secret voice commands. When triggered, it captures photos and audio evidence while automatically sending distress alerts via email to emergency contacts.",
    features: [
      "Secret voice command activation",
      "Emergency email alerts",
      "Automatic photo & audio capture",
      "Privacy-focused design",
    ],
    technologies: [
      "React Native (Expo)",
      "Voice Recognition API",
      "Firebase",
      "Email Integration",
      "Zapier",
    ],
    bgImage: "/work-1.png",
    codeLink: "https://github.com/bhavani-2710/resQall",
  },
  {
    title: "Aptitude Portal",
    description:
      "An adaptive learning platform powered by AI that provides personalized aptitude tests. Features comprehensive analytics, performance tracking, and intelligent question adaptation based on user responses.",
    features: [
      "Adaptive question difficulty",
      "User progress tracking",
      "Real-time scoring",
      "Performance analytics",
      "Multiple test categories",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Javascript(ES6+)",
      "PostgreSQL",
      "AI Algorithms",
    ],
    bgImage: "/work-4.png",
    codeLink: "https://github.com/jaypatelll1/csi-aptitude-portal",
    liveLink: "https://phronesis.csiace.com/",
  },
  {
    title: "SmartMinutes - AI Meeting Minutes Generator",
    description:
      "An intelligent app that records meetings, transcribes audio using AI, and generates concise summaries. It helps teams save time by automatically capturing key points and action items from discussions.",
    features: [
      "Real-time audio recording",
      "AI transcription and summarization",
      "Searchable meeting history",
      "Exportable notes and summaries",
      "Offline-first design with local storage",
    ],
    technologies: [
      "React Native (Expo)",
      "AssemblyAI",
      "HuggingFace",
      "Firebase",
      "Audio Player Integration",
      "Zapier",
      "Email Integration",
    ],
    bgImage: "/work-2.png",
    codeLink: "https://github.com/bhavani-2710/Smart-Minutes-App",
  },
  {
    title: "NewsHub - Personalized News Aggregator",
    description:
      "An intelligent news platform that learns user preferences to deliver customized news content. Features smart recommendations, content filtering, and a 'save for later' functionality for seamless news consumption.",
    features: [
      "AI-powered recommendations",
      "Content categorization",
      "Responsive design",
      "User preference learning",
      "Save for later functionality",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDb",
      "Express",
      "News API",
      "Local Storage",
    ],
    bgImage: "/work-3.png",
    codeLink: "https://github.com/bhavani-2710/Personalized-News-Aggregator",
    liveLink: "https://personalized-news-aggregator-frontend.onrender.com/",
  },
];

export const serviceData: Service[] = [
  {
    icon: assets.web_icon,
    title: "Web Development",
    description:
      "Building responsive and functional websites and web apps with clean UI and optimized performance.",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile App",
    description:
      "Creating intuitive and high-performance mobile apps for iOS and Android devices.",
  },
];

export const infoList: Skill[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "MongoDB, MySQL, HTML5, CSS, JavaScript, NodeJS, Tailwind CSS",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Frameworks",
    description: "ReactJS, React Native, NextJS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.E in Computer Engineering",
  },
];

export const toolsData: Tools = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.postgresql,
  assets.react,
  assets.javascript,
  assets.tailwindcss,
];
