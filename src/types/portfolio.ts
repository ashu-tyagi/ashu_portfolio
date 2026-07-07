export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  tools: string[];
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  detail?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  period?: string;
  highlights: string[];
}

export interface Certificate {
  title: string;
  institution: string;
  highlights: string[];
}

export interface Language {
  name: string;
  proficiency: string;
}
