export type Experience = {
  year: string;
  company: string;
  role: string;
  description: string;
  slug: string;
};

export type CareerContent = {
  eyebrow: string;
  title: string;
  experiences: Experience[];
};  