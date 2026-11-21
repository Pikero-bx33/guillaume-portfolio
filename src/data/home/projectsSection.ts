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
        slug: "mynews",
        year: 2026,
        title: "myNews",
        description:
          "Personalised news app built from one Expo codebase for native and web, with authentication, preferences, curated feeds and reading states.",
        stack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Express",
          "MongoDB",
          "Better Auth",
        ],
        status: "featured",
        hasCaseStudy: true,
      },

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
        slug: "dishcovery",
        year: 2026,
        title: "Dishcovery",
        description:
          "A bilingual AI recipe generator built with structured recipe outputs, unique dish images and Redis-backed usage protection.",
        stack: [
          "Next.js",
          "TypeScript",
          "OpenAI",
          "Redis",
        ],
        status: "learning",
        hasCaseStudy: true,
      },

      {
        slug: "assembly-endgame",
        year: 2026,
        title: "Assembly: End Game",
        description:
          "Hangman-inspired game built to strengthen React logic and state management.",
        stack: ["Next.js", "React", "TypeScript"],
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

      /* {
        slug: "todo-ai",
        year: 2026,
        title: "Todo AI",
        description:
          "Mobile task management project exploring React Native and AI-assisted features.",
        stack: ["React Native", "Expo"],
        status: "learning",
        hasCaseStudy: false,
      }, */

      {
        slug: "curio-lab",
        year: 2026,
        title: "Curio Lab",
        description:
          "Quiz application built with Next.js and TypeScript to practice application logic.",
        stack: ["Next.js", "TypeScript", "CSS", "Zod"],
        status: "learning",
        hasCaseStudy: true,
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

      {
        slug: "ai-sales-assistant-agent",
        year: 2026,
        title: "AI Sales Assistant Agent",
        description:
          "Future AI-powered sales assistant for customer acquisition workflows, from lead qualification to personalised outreach, to be built progressively after an OpenAI Academy learning path.",
        stack: ["Next.js", "TypeScript", "OpenAI", "AI Agents"],
        status: "coming-soon",
        hasCaseStudy: false,
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
        slug: "mynews",
        year: 2026,
        title: "myNews",
        description:
          "Application d'actualités personnalisée, développée depuis une même codebase Expo pour le natif et le Web, avec authentification, préférences, feed adapté et états de lecture.",
        stack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Express",
          "MongoDB",
          "Better Auth",
        ],
        status: "featured",
        hasCaseStudy: true,
      },

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
        slug: "dishcovery",
        year: 2026,
        title: "Dishcovery",
        description:
          "Générateur de recettes bilingue combinant recettes structurées, images de plats générées par IA et protection des usages avec Redis.",
        stack: [
          "Next.js",
          "TypeScript",
          "OpenAI",
          "Redis",
        ],
        status: "learning",
        hasCaseStudy: true,
      },

      {
        slug: "assembly-endgame",
        year: 2026,
        title: "Assembly: End Game",
        description:
          "Jeu inspiré du pendu réalisé pour approfondir la logique et la gestion du state avec React.",
        stack: ["Next.js", "React", "TypeScript"],
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

      /* {
        slug: "todo-ai",
        year: 2026,
        title: "Todo AI",
        description:
          "Projet mobile de gestion de tâches explorant React Native et des fonctionnalités assistées par IA.",
        stack: ["React Native", "Expo"],
        status: "learning",
        hasCaseStudy: false,
      }, */

      {
        slug: "curio-lab",
        year: 2026,
        title: "Curio Lab",
        description:
          "Application de quiz en Next.js et TypeScript pour approfondir la logique applicative.",
        stack: ["Next.js", "TypeScript", "CSS", "Zod"],
        status: "learning",
        hasCaseStudy: true,
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

      {
        slug: "ai-sales-assistant-agent",
        year: 2026,
        title: "AI Sales Assistant Agent",
        description:
          "Futur assistant commercial propulsé par l'IA pour accompagner les workflows d'acquisition client, de la qualification des prospects à la personnalisation des approches, développé progressivement après un parcours d'apprentissage OpenAI Academy.",
        stack: ["Next.js", "TypeScript", "OpenAI", "AI Agents"],
        status: "coming-soon",
        hasCaseStudy: false,
      },
    ],
  },
};
