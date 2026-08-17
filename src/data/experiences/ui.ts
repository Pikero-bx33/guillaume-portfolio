import type { Locale } from "@/types/locale";

export const experienceUi = {
  en: {
    experience: "Career Experience",
    training: "Training",
    overview: "Overview",
    responsibilities: "Responsibilities",
    achievements: "Key Achievements",
    skills: "Skills",
    careerPath: "Career Path",
    lessons: "What I Learned",
    back: "Back to career",
  },

  fr: {
    experience: "Expérience professionnelle",
    training: "Formation",
    overview: "Présentation",
    responsibilities: "Responsabilités",
    achievements: "Réalisations clés",
    skills: "Compétences",
    careerPath: "Évolution",
    lessons: "Ce que j'en retiens",
    back: "Retour au parcours",
  },
} satisfies Record<Locale, Record<string, string>>;