export type SkillGroup = {
  title: string;
  skills: string[];
};

export type SkillsContent = {
  eyebrow: string;
  title: string;
  description: string;
  groups: SkillGroup[];
  closing: string;
};