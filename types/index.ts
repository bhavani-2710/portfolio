import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  bgImage: string;
  codeLink: string;
  liveLink?: string;
}

export interface Service {
  icon: StaticImageData; // next/image type
  title: string;
  description: string;
}

export interface Skill {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

export type Tools = StaticImageData[];
