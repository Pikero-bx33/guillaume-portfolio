import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const ecoProfsProject: Record<Locale, ProjectDetails> = {
  en: {
    slug: "ecoprofs",

    title: "EcoProfs",

    subtitle:
      "A mobile marketplace MVP connecting primary school teachers to exchange and reuse educational materials.",

    role: "Full-Stack Developer — Team Project",

    duration: "5 sprints",

    status: "MVP completed",

    overview: [
      "EcoProfs was developed as the final project of my Full-Stack JavaScript training at La Capsule.",
      "The goal was to build a mobile marketplace dedicated to primary school teachers, allowing them to publish, discover and exchange educational materials locally.",
      "The project was developed as a team and delivered as a working MVP for a final presentation in front of a jury.",
    ],

    objectives: [
      "Build a functional mobile marketplace MVP.",
      "Implement secure authentication restricted to educational email domains.",
      "Allow teachers to publish and manage classified ads.",
      "Provide search, filtering and geolocation features.",
      "Build both the mobile frontend and the REST API.",
      "Work collaboratively using a sprint-based development process.",
    ],

    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Better Auth",
      "Cloudinary",
    ],

    keyFeatures: [
      "Email/password authentication with educational domain validation.",
      "Multi-step user onboarding.",
      "Create, edit and manage marketplace ads.",
      "Camera and image upload integration.",
      "Geolocation and distance-based search.",
      "Categories and grade-level filters.",
      "Favorites management.",
      "User profile and personal ads management.",
    ],

    architecture: [
      "React Native and Expo used for the mobile application.",
      "Redux Toolkit used for shared client-side state.",
      "Express REST API used for backend services.",
      "MongoDB and Mongoose used for persistence and data modelling.",
      "GeoJSON and a 2dsphere index used for location-based searches.",
      "Zod used to validate API inputs.",
      "Better Auth used for authentication.",
      "Cloudinary used for image storage.",
    ],

    challenges: [
      "Designing authentication across a React Native frontend and Express backend.",
      "Restricting account creation to authorised educational email domains.",
      "Managing navigation between authentication, onboarding and the main application.",
      "Integrating the mobile camera and image upload workflow.",
      "Implementing geolocation and distance-based marketplace searches.",
      "Keeping frontend and backend TypeScript models consistent.",
      "Coordinating development across several team members during short sprints.",
    ],

    lessons: [
      "Mobile development introduces platform-specific constraints that differ significantly from web development.",
      "Clear API contracts are essential when frontend and backend are developed in parallel.",
      "Authentication is a complete flow involving security, navigation and user state, not just a login screen.",
      "Breaking complex features into smaller sprint-sized tasks improves team delivery.",
      "Building an MVP means prioritising essential user journeys over feature completeness.",
    ],

    nextSteps: [
      "Complete and stabilise the remaining unfinished features.",
      "Improve automated testing on both frontend and backend.",
      "Strengthen error handling and loading states.",
      "Improve the overall UI and accessibility.",
      "Review and simplify parts of the navigation architecture.",
      "Deploy a production-ready backend and mobile build.",
    ],

    gallery: [
      {
        src: "/images/projects/ecoprofs/login.png",
        alt: "EcoProfs authentication screen",
        caption: "Authentication and educational email validation",
        aspect: "portrait",
      },
      {
        src: "/images/projects/ecoprofs/home.png",
        alt: "EcoProfs marketplace home screen",
        caption: "Marketplace home and classified ads",
        aspect: "portrait",
      },
      {
        src: "/images/projects/ecoprofs/publish.png",
        alt: "EcoProfs ad publishing flow",
        caption: "Ad creation and image upload workflow",
        aspect: "portrait",
      },
      {
        src: "/images/projects/ecoprofs/search.png",
        alt: "EcoProfs search screen",
        caption: "Search, filters and location-based discovery",
        aspect: "portrait",
      },
    ],

    githubUrl: "TON_URL_GITHUB_ECOPROFS",
  },

  fr: {
    slug: "ecoprofs",

    title: "EcoProfs",

    subtitle:
      "MVP mobile d'une marketplace permettant aux enseignants du primaire d'échanger et de réutiliser du matériel pédagogique.",

    role: "Développeur Full-Stack — Projet d'équipe",

    duration: "5 sprints",

    status: "MVP finalisé",

    overview: [
      "EcoProfs a été développé comme projet de fin de formation Full-Stack JavaScript à La Capsule.",
      "L'objectif était de construire une marketplace mobile dédiée aux enseignants du primaire, leur permettant de publier, découvrir et échanger localement du matériel pédagogique.",
      "Le projet a été réalisé en équipe et livré sous la forme d'un MVP fonctionnel présenté devant un jury.",
    ],

    objectives: [
      "Construire un MVP fonctionnel de marketplace mobile.",
      "Mettre en place une authentification sécurisée réservée aux domaines email de l'Éducation nationale.",
      "Permettre aux enseignants de publier et gérer leurs annonces.",
      "Proposer des fonctionnalités de recherche, filtrage et géolocalisation.",
      "Développer à la fois le frontend mobile et l'API REST.",
      "Travailler en équipe avec une organisation basée sur des sprints.",
    ],

    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Better Auth",
      "Cloudinary",
    ],

    keyFeatures: [
      "Authentification email/mot de passe avec validation du domaine éducatif.",
      "Onboarding utilisateur en plusieurs étapes.",
      "Création, modification et gestion des annonces.",
      "Intégration de la caméra et upload d'images.",
      "Géolocalisation et recherche par distance.",
      "Filtres par catégorie et niveau scolaire.",
      "Gestion des favoris.",
      "Gestion du profil utilisateur et des annonces personnelles.",
    ],

    architecture: [
      "React Native et Expo utilisés pour l'application mobile.",
      "Redux Toolkit utilisé pour la gestion de l'état partagé côté client.",
      "API REST Express utilisée pour les services backend.",
      "MongoDB et Mongoose utilisés pour la persistance et la modélisation des données.",
      "GeoJSON et un index 2dsphere utilisés pour les recherches géolocalisées.",
      "Zod utilisé pour la validation des données entrantes de l'API.",
      "Better Auth utilisé pour l'authentification.",
      "Cloudinary utilisé pour le stockage des images.",
    ],

    challenges: [
      "Concevoir le flux d'authentification entre le frontend React Native et le backend Express.",
      "Limiter la création de comptes aux domaines email éducatifs autorisés.",
      "Gérer la navigation entre authentification, onboarding et application principale.",
      "Intégrer la caméra mobile et le workflow d'upload d'images.",
      "Mettre en place la géolocalisation et la recherche d'annonces par distance.",
      "Maintenir une cohérence entre les modèles TypeScript frontend et backend.",
      "Coordonner le développement entre plusieurs membres de l'équipe sur des sprints courts.",
    ],

    lessons: [
      "Le développement mobile introduit des contraintes spécifiques différentes du développement web.",
      "Des contrats d'API clairs sont essentiels lorsque frontend et backend évoluent en parallèle.",
      "L'authentification est un flux complet mêlant sécurité, navigation et état utilisateur, pas seulement un écran de connexion.",
      "Découper les fonctionnalités complexes en tâches plus petites facilite la livraison en équipe.",
      "Construire un MVP oblige à prioriser les parcours utilisateurs essentiels plutôt que de chercher l'exhaustivité fonctionnelle.",
    ],

    nextSteps: [
      "Finaliser et stabiliser les fonctionnalités encore incomplètes.",
      "Renforcer les tests automatisés côté frontend et backend.",
      "Améliorer la gestion des erreurs et des états de chargement.",
      "Améliorer l'interface générale et l'accessibilité.",
      "Revoir et simplifier certaines parties de la navigation.",
      "Déployer un backend et une build mobile prêts pour la production.",
    ],

    gallery: [
      {
        src: "/images/projects/ecoprofs/login.png",
        alt: "Écran d'authentification EcoProfs",
        caption: "Authentification et validation du domaine éducatif",
        aspect: "portrait",
      },
      {
        src: "/images/projects/ecoprofs/home.png",
        alt: "Écran d'accueil de la marketplace EcoProfs",
        caption: "Accueil de la marketplace et annonces",
        aspect: "portrait",
      },
      {
        src: "/images/projects/ecoprofs/publish.png",
        alt: "Parcours de publication d'une annonce sur EcoProfs",
        caption: "Création d'annonce et ajout d'images",
        aspect: "portrait",
      },
      {
        src: "/images/projects/ecoprofs/search.png",
        alt: "Écran de recherche EcoProfs",
        caption: "Recherche, filtres et découverte géolocalisée",
        aspect: "portrait",
      },
    ],

    githubUrl: "TON_URL_GITHUB_ECOPROFS",
  },
};