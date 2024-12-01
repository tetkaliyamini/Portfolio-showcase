export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon: string;
  level?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}