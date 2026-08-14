export type ProjectStatus =
  | "featured"
  | "learning"
  | "coming-soon";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  year: number;
  githubUrl?: string;
  liveUrl?: string;
  hasCaseStudy?: boolean
};

export type ProjectsSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  learningTitle: string;
  comingSoonTitle: string;
  inProgressLabel: string;
  projects: Project[];
};