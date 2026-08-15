export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "landscape" | "portrait";
};

export type ProjectDetails = {
  slug: string;
  title: string;
  subtitle: string;

  role: string;
  duration: string;
  status: string;

  overview: string[];
  objectives: string[];
  techStack: string[];
  keyFeatures: string[];
  architecture: string[];
  challenges: string[];
  lessons: string[];
  nextSteps: string[];

  gallery?: ProjectImage[];

  githubUrl?: string;
  liveUrl?: string;
};