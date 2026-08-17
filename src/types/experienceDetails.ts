export type CareerStep = {
  period: string;
  role: string;
  description: string;
  highlights?: string[];
};

export type ExperienceDetails = {
  slug: string;
  company: string;
  category: "career" | "training";
  location: string;
  period: string;

  title: string;
  subtitle: string;

  overview: string[];

  responsibilities: string[];

  achievements?: string[];

  skills: string[];

  careerSteps?: CareerStep[];

  lessons?: string[];

  logo: string;
  logoAlt: string;
};