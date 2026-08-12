import type { Locale } from "@/types/locale";

export const projectUi = {
  en: {
    caseStudy: "Case Study",
    overview: "Overview",
    objectives: "Objectives",
    techStack: "Tech Stack",
    keyFeatures: "Key Features",
    architecture: "Architecture",
    challenges: "Challenges",
    lessons: "Lessons Learned",
    nextSteps: "If I rebuilt this project today...",
    role: "Role",
    duration: "Duration",
    status: "Status",
    back: "Back to portfolio",
    github: "GitHub",
    demo: "Live Demo",
  },

  fr: {
    caseStudy: "Étude de cas",
    overview: "Présentation",
    objectives: "Objectifs",
    techStack: "Stack technique",
    keyFeatures: "Fonctionnalités principales",
    architecture: "Architecture",
    challenges: "Défis",
    lessons: "Enseignements",
    nextSteps: "Si je devais reconstruire ce projet aujourd'hui...",
    role: "Rôle",
    duration: "Durée",
    status: "Statut",
    back: "Retour au portfolio",
    github: "GitHub",
    demo: "Démo",
  },
} satisfies Record<Locale, Record<string, string>>;