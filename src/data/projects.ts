import type { Locale } from "@/types/locale";
import type { ProjectsSectionContent } from "@/types/project";

export const projectsContent: Record<Locale, ProjectsSectionContent> = {
  en: {
    eyebrow: "Projects",
    title: "Selected work & experiments.",
    description:
      "A selection of projects ranging from larger applications to smaller learning experiments.",
    learningTitle: "Learning Projects",
    comingSoonTitle: "Coming Soon",
    inProgressLabel: "In Progress",

    projects: [
      {
        slug: "printforge",
        year: 2026,
        title: "PrintForge",
        description:
          "Modern marketplace showcase built with Next.js App Router.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "featured",
      },

      {
        slug: "ecoprofs",
        year: 2026,
        title: "EcoProfs",
        description:
          "Educational marketplace MVP built with React Native and Express.",
        stack: ["React Native", "Expo", "Express", "MongoDB"],
        status: "featured",
      },

      {
        slug: "chef-claude",
        year: 2026,
        title: "Chef Claude",
        description:
          "Generate recipes from available ingredients using AI.",
        stack: ["React", "Claude AI"],
        status: "learning",
      },

      {
        slug: "assembly-endgame",
        year: 2026,
        title: "Assembly: End Game",
        description:
          "Hangman-inspired game focused on React logic.",
        stack: ["React"],
        status: "learning",
      },

      {
        slug: "tenzies",
        year: 2026,
        title: "Tenzies",
        description:
          "Dice game exploring React state management.",
        stack: ["React"],
        status: "learning",
      },

      {
        slug: "todo-ai",
        year: 2026,
        title: "Todo AI",
        description:
          "AI-assisted task manager.",
        stack: ["React Native", "Expo"],
        status: "learning",
      },

      {
        slug: "quizzical",
        year: 2026,
        title: "Quizzical",
        description:
          "Quiz application built with Next.js.",
        stack: ["Next.js", "TypeScript"],
        status: "learning",
      },

      {
        slug: "ai-news-aggregator",
        year: 2026,
        title: "AI News Aggregator",
        description:
          "AI-powered news aggregation platform currently in development.",
        stack: ["React Native", "TypeScript", "Express", "MongoDB"],
        status: "coming-soon",
      },
    ],
  },

  fr: {
    eyebrow: "Projets",
    title: "Projets sélectionnés & expérimentations.",
    description:
      "Une sélection de projets allant d'applications complètes à des projets d'apprentissage.",
    learningTitle: "Projets d'apprentissage",
    comingSoonTitle: "À venir",
    inProgressLabel: "En cours",

    projects: [
      {
        slug: "printforge",
        year: 2026,
        title: "PrintForge",
        description:
          "Vitrine moderne réalisée avec Next.js App Router.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "featured",
      },

      {
        slug: "ecoprofs",
        year: 2026,
        title: "EcoProfs",
        description:
          "MVP d'une marketplace dédiée aux enseignants.",
        stack: ["React Native", "Expo", "Express", "MongoDB"],
        status: "featured",
      },

      {
        slug: "chef-claude",
        year: 2026,
        title: "Chef Claude",
        description:
          "Génération de recettes grâce à l'IA.",
        stack: ["React", "Claude AI"],
        status: "learning",
      },

      {
        slug: "assembly-endgame",
        year: 2026,
        title: "Assembly: End Game",
        description:
          "Jeu inspiré du pendu pour travailler la logique React.",
        stack: ["React"],
        status: "learning",
      },

      {
        slug: "tenzies",
        year: 2026,
        title: "Tenzies",
        description:
          "Jeu de dés pour approfondir la gestion du state React.",
        stack: ["React"],
        status: "learning",
      },

      {
        slug: "todo-ai",
        year: 2026,
        title: "Todo AI",
        description:
          "Application de gestion de tâches assistée par IA.",
        stack: ["React Native", "Expo"],
        status: "learning",
      },

      {
        slug: "quizzical",
        year: 2026,
        title: "Quizzical",
        description:
          "Application de quiz développée avec Next.js.",
        stack: ["Next.js", "TypeScript"],
        status: "learning",
      },

      {
        slug: "ai-news-aggregator",
        year: 2026,
        title: "AI News Aggregator",
        description:
          "Agrégateur de news enrichi par IA en cours de développement.",
        stack: ["React Native", "TypeScript", "Express", "MongoDB"],
        status: "coming-soon",
      },
    ],
  },
};