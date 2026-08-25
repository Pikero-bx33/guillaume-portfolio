import type { Locale } from "@/types/locale";
import type { ProjectsSectionContent } from "@/types/project";

export const projectsContent: Record<Locale, ProjectsSectionContent> = {
  en: {
    eyebrow: "Projects",
    title: "Main projects & learning projects.",
    description:
      "From full applications to focused learning projects, each build is an opportunity to turn ideas into working products and strengthen my technical skills.",
    mainTitle: "Main projects",
    learningTitle: "Learning Projects",
    comingSoonTitle: "Coming Soon",
    inProgressLabel: "In Progress",

    projects: [
      {
        slug: "printforge",
        year: 2026,
        title: "PrintForge",
        description:
          "Responsive 3D model marketplace showcase built with Next.js App Router and TypeScript.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "featured",
        hasCaseStudy: true,
      },

      {
        slug: "ecoprofs",
        year: 2026,
        title: "EcoProfs",
        description:
          "Marketplace MVP for primary school teachers, built with React Native and an Express/MongoDB backend.",
        stack: ["React Native", "Expo", "Express", "MongoDB"],
        status: "featured",
        hasCaseStudy: true,
      },

      {
        slug: "chef-claude",
        year: 2026,
        title: "Chef Claude",
        description:
          "AI-powered recipe generator built to practice API integration and React state.",
        stack: ["React", "Claude AI"],
        status: "learning",
        hasCaseStudy: false,
      },

      {
        slug: "assembly-endgame",
        year: 2026,
        title: "Assembly: End Game",
        description:
          "Hangman-inspired game built to strengthen React logic and state management.",
        stack: ["React"],
        status: "learning",
        hasCaseStudy: true,
      },

      {
        slug: "tenzies",
        year: 2026,
        title: "Tenzies",
        description:
          "A Next.js dice game featuring persistent records, game statistics and accessible interactions.",
        stack: ["Next.js", "React", "TypeScript"],
        status: "learning",
        hasCaseStudy: true,
      },

      {
        slug: "todo-ai",
        year: 2026,
        title: "Todo AI",
        description:
          "Mobile task management project exploring React Native and AI-assisted features.",
        stack: ["React Native", "Expo"],
        status: "learning",
        hasCaseStudy: false,
      },

      {
        slug: "quizzical",
        year: 2026,
        title: "Quizzical",
        description:
          "Quiz application built with Next.js and TypeScript to practice application logic.",
        stack: ["Next.js", "TypeScript"],
        status: "learning",
        hasCaseStudy: false,
      },

      {
        slug: "ai-news-aggregator",
        year: 2026,
        title: "AI News Aggregator",
        description:
          "AI-powered news aggregation platform currently in development.",
        stack: ["React Native", "TypeScript", "Express", "MongoDB"],
        status: "coming-soon",
        hasCaseStudy: false,
      },

      {
        slug: "portfolio",
        year: 2026,
        title: "Personal Portfolio",
        description:
          "Bilingual Next.js portfolio built as a scalable platform to connect my business, digital and technical experience.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "featured",
        hasCaseStudy: true,
      },
    ],
  },

  fr: {
    eyebrow: "Projets",
    title: "Projets principaux & projets d’apprentissage.",
    description:
      "Des applications complètes aux projets plus ciblés, chaque réalisation me permet de transformer une idée en produit fonctionnel et de renforcer mes compétences techniques.",
    mainTitle: "Projets principaux",
    learningTitle: "Projets d'apprentissage",
    comingSoonTitle: "À venir",
    inProgressLabel: "En cours",

    projects: [
      {
        slug: "printforge",
        year: 2026,
        title: "PrintForge",
        description:
          "Vitrine responsive d'une marketplace de modèles 3D développée avec Next.js App Router et TypeScript.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "featured",
        hasCaseStudy: true,
      },

      {
        slug: "ecoprofs",
        year: 2026,
        title: "EcoProfs",
        description:
          "MVP d'une marketplace dédiée aux enseignants du primaire, développée en React Native avec un backend Express/MongoDB.",
        stack: ["React Native", "Expo", "Express", "MongoDB"],
        status: "featured",
        hasCaseStudy: true,
      },

      {
        slug: "chef-claude",
        year: 2026,
        title: "Chef Claude",
        description:
          "Générateur de recettes par IA réalisé pour travailler l'intégration d'API et le state React.",
        stack: ["React", "Claude AI"],
        status: "learning",
        hasCaseStudy: false,
      },

      {
        slug: "assembly-endgame",
        year: 2026,
        title: "Assembly: End Game",
        description:
          "Jeu inspiré du pendu réalisé pour approfondir la logique et la gestion du state avec React.",
        stack: ["React"],
        status: "learning",
        hasCaseStudy: true,
      },

      {
        slug: "tenzies",
        year: 2026,
        title: "Tenzies",
        description:
          "Jeu de dés Next.js intégrant statistiques, records persistants et interactions accessibles.",
        stack: ["Next.js", "React", "TypeScript"],
        status: "learning",
        hasCaseStudy: true,
      },

      {
        slug: "todo-ai",
        year: 2026,
        title: "Todo AI",
        description:
          "Projet mobile de gestion de tâches explorant React Native et des fonctionnalités assistées par IA.",
        stack: ["React Native", "Expo"],
        status: "learning",
        hasCaseStudy: false,
      },

      {
        slug: "quizzical",
        year: 2026,
        title: "Quizzical",
        description:
          "Application de quiz en Next.js et TypeScript pour approfondir la logique applicative.",
        stack: ["Next.js", "TypeScript"],
        status: "learning",
        hasCaseStudy: false,
      },

      {
        slug: "ai-news-aggregator",
        year: 2026,
        title: "AI News Aggregator",
        description:
          "Plateforme d'agrégation de contenus d'actualité enrichie par IA, actuellement en développement.",
        stack: ["React Native", "TypeScript", "Express", "MongoDB"],
        status: "coming-soon",
        hasCaseStudy: false,
      },

      {
        slug: "portfolio",
        year: 2026,
        title: "Portfolio personnel",
        description:
          "Portfolio bilingue en Next.js conçu comme une plateforme évolutive reliant mon expérience business, digitale et technique.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "featured",
        hasCaseStudy: true,
      },
    ],
  },
};