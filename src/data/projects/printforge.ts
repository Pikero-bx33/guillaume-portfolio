import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const printForgeProject: Record<Locale, ProjectDetails> = {
  en: {
    slug: "printforge",
    title: "PrintForge",
    role: "Solo Developer",
    duration: "2026",
    status: "Completed",

    subtitle:
      "A responsive 3D model marketplace showcase built with Next.js App Router and TypeScript.",

    overview: [
      "PrintForge was created as a learning project to deepen my understanding of modern web development with Next.js and TypeScript.",
      "Beyond building individual features, the goal was to understand how to structure a scalable application using the App Router, reusable components and a clear separation between data, types and presentation.",
      "The project became an opportunity to work on architecture, responsive design, dynamic routing and maintainability while progressively adopting more professional development practices.",
    ],

    objectives: [
      "Learn and apply Next.js App Router.",
      "Use TypeScript throughout a real project.",
      "Build a scalable component architecture.",
      "Create a responsive mobile-first interface.",
      "Improve code organisation and maintainability.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "App Router",
    ],

    keyFeatures: [
      "Dynamic routing with Next.js App Router.",
      "Search and category filtering.",
      "Responsive pagination.",
      "Reusable TypeScript components.",
      "Mobile-first responsive design.",
    ],

    architecture: [
      "Next.js App Router handles routing and page organisation.",
      "TypeScript provides shared contracts and stronger type safety.",
      "Reusable components are separated from page-level routing logic.",
      "Content, types and presentation are organised in dedicated layers.",
      "Tailwind CSS is used to build a mobile-first responsive interface.",
    ],

    challenges: [
      "Designing a coherent folder structure that could evolve without constant reorganisation.",
      "Understanding dynamic routing and the App Router model in Next.js.",
      "Moving from page-specific code toward reusable component composition.",
      "Using TypeScript as a real architectural tool rather than only adding types locally.",
      "Maintaining responsive behaviour while keeping the component architecture simple.",
    ],

    lessons: [
      "A clear architecture makes future features easier to add.",
      "TypeScript becomes particularly useful when shared types act as contracts across the application.",
      "Small reusable components improve readability and maintainability.",
      "Separating content from presentation simplifies internationalisation and future evolution.",
      "Mobile-first development makes responsive behaviour easier to reason about.",
    ],

    nextSteps: [
      "Add automated tests for key components and user flows.",
      "Improve accessibility and keyboard navigation.",
      "Add richer technical documentation and architecture diagrams.",
      "Continue optimising images and overall performance.",
      "Deploy the application and introduce a CI/CD workflow.",
    ],

    gallery: [
      {
        src: "/images/projects/printforge/home.png",
        alt: "PrintForge homepage",
        caption: "Homepage and main navigation",
        aspect: "landscape",
      },
      {
        src: "/images/projects/printforge/about.png",
        alt: "PrintForge about page",
        caption: "About page and project presentation",
        aspect: "landscape",
      },
      {
        src: "/images/projects/printforge/mobile.png",
        alt: "PrintForge mobile view",
        caption: "Responsive mobile layout",
        aspect: "portrait",
      },
    ],

    // Replace with the actual PrintForge repository URL
    githubUrl: "",
  },

  fr: {
    slug: "printforge",
    title: "PrintForge",
    role: "Développeur solo",
    duration: "2026",
    status: "Terminé",

    subtitle:
      "Vitrine responsive d'une marketplace de modèles 3D développée avec Next.js App Router et TypeScript.",

    overview: [
      "PrintForge a été réalisé comme projet d'apprentissage afin d'approfondir ma maîtrise du développement web moderne avec Next.js et TypeScript.",
      "Au-delà de la réalisation de fonctionnalités isolées, l'objectif était de comprendre comment structurer une application évolutive avec l'App Router, des composants réutilisables et une séparation claire entre données, types et présentation.",
      "Le projet m'a permis de travailler l'architecture, le responsive design, le routage dynamique et la maintenabilité tout en adoptant progressivement des pratiques de développement plus professionnelles.",
    ],

    objectives: [
      "Apprendre et mettre en pratique Next.js App Router.",
      "Utiliser TypeScript sur l'ensemble d'un projet réel.",
      "Construire une architecture de composants évolutive.",
      "Créer une interface responsive en mobile-first.",
      "Améliorer l'organisation et la maintenabilité du code.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "App Router",
    ],

    keyFeatures: [
      "Routage dynamique avec Next.js App Router.",
      "Recherche et filtrage par catégories.",
      "Pagination responsive.",
      "Composants TypeScript réutilisables.",
      "Responsive design développé en mobile-first.",
    ],

    architecture: [
      "Next.js App Router gère le routage et l'organisation des pages.",
      "TypeScript permet de définir des contrats partagés et d'améliorer la sécurité du typage.",
      "Les composants réutilisables sont séparés de la logique de routage des pages.",
      "Les données, les types et la présentation sont organisés dans des couches dédiées.",
      "Tailwind CSS est utilisé pour construire une interface responsive en mobile-first.",
    ],

    challenges: [
      "Concevoir une arborescence cohérente capable d'évoluer sans réorganisation permanente.",
      "Comprendre le fonctionnement de l'App Router et du routage dynamique dans Next.js.",
      "Passer d'un code spécifique à chaque page à une logique de composition de composants réutilisables.",
      "Utiliser TypeScript comme véritable outil d'architecture et pas seulement pour typer localement quelques variables.",
      "Maintenir un responsive propre tout en conservant une architecture de composants simple.",
    ],

    lessons: [
      "Une architecture claire facilite fortement l'ajout de nouvelles fonctionnalités.",
      "TypeScript prend toute sa valeur lorsque les types partagés servent de contrats dans l'application.",
      "De petits composants réutilisables améliorent la lisibilité et la maintenabilité.",
      "Séparer le contenu de la présentation facilite l'internationalisation et l'évolution du projet.",
      "Une approche mobile-first rend le comportement responsive plus simple à anticiper.",
    ],

    nextSteps: [
      "Ajouter des tests automatisés sur les composants et parcours principaux.",
      "Continuer à améliorer l'accessibilité et la navigation clavier.",
      "Enrichir la documentation technique et ajouter des schémas d'architecture.",
      "Poursuivre l'optimisation des images et des performances.",
      "Déployer l'application et mettre en place un workflow CI/CD.",
    ],

    gallery: [
      {
        src: "/images/projects/printforge/home.png",
        alt: "Page d'accueil de PrintForge",
        caption: "Page d'accueil et navigation principale",
        aspect: "landscape",
      },
      {
        src: "/images/projects/printforge/about.png",
        alt: "Page À propos de PrintForge",
        caption: "Présentation du projet",
        aspect: "landscape",
      },
      {
        src: "/images/projects/printforge/mobile.png",
        alt: "Version mobile de PrintForge",
        caption: "Interface responsive sur mobile",
        aspect: "portrait",
      },
    ],

    // Replace with the actual PrintForge repository URL
    githubUrl: "",
  },
};