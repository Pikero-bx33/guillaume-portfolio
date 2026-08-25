import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const assemblyEndgameProject: Record<
  Locale,
  ProjectDetails
> = {
  en: {
    slug: "assembly-endgame",

    title: "Assembly: End Game",

    subtitle:
      "A hangman-inspired word game refactored from React to Next.js with persistent statistics, hints and improved game logic.",

    role: "Solo Developer",

    duration: "2026",

    status: "Completed",

    overview: [
      "Assembly: End Game started as a Scrimba React learning project inspired by the classic Hangman game.",
      "The objective of the refactor was to move the project into a standalone Next.js and TypeScript application while improving the original game architecture and adding new functionality.",
      "The game challenges the player to guess a hidden word before all programming languages are eliminated and Assembly becomes the last language standing.",
    ],

    objectives: [
      "Refactor the original React project into a standalone Next.js application.",
      "Strengthen React state and game-logic management.",
      "Use TypeScript to define clear contracts for game data and statistics.",
      "Separate game logic, UI components and reusable utilities.",
      "Add persistent player statistics and additional game interactions.",
      "Deploy the project as a standalone production application.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "LocalStorage",
    ],

    keyFeatures: [
      "Hangman-inspired word guessing gameplay.",
      "Random word generation.",
      "Interactive on-screen keyboard.",
      "Correct and incorrect guess feedback.",
      "Programming-language elimination system.",
      "Win and loss game states.",
      "Hint system.",
      "Persistent game statistics stored locally.",
      "Win / loss tracking and streak statistics.",
      "Responsive interface.",
      "Restart and new-game flow.",
    ],

    architecture: [
      "Next.js App Router used as the application framework.",
      "The main game interface is implemented as an interactive Client Component.",
      "The initial word is generated before being passed to the game component.",
      "Game logic is separated from presentation through dedicated utilities and types.",
      "Reusable hooks handle persistent player statistics.",
      "LocalStorage is used to preserve statistics between browser sessions.",
      "TypeScript types define the game outcome and statistics structures.",
    ],

    challenges: [
      "Refactoring state-heavy React game logic into a cleaner Next.js project structure.",
      "Keeping game state transitions predictable across guesses, wins, losses and restarts.",
      "Managing persistent statistics without coupling storage logic directly to the UI.",
      "Handling client-only browser APIs such as LocalStorage within a Next.js application.",
      "Separating word generation, game logic and visual components while keeping the game easy to maintain.",
    ],

    lessons: [
      "Game projects are useful for strengthening state-management and conditional-rendering skills.",
      "Extracting persistent state into a dedicated hook keeps UI components easier to understand.",
      "TypeScript helps make game-state transitions and statistics more explicit.",
      "Separating utilities from components makes complex interaction logic easier to test and evolve.",
      "Refactoring an existing React project is a useful way to understand the differences between React and Next.js application architecture.",
    ],

    nextSteps: [
      "Add automated tests for the main game logic.",
      "Expand word categories and difficulty options.",
      "Improve keyboard accessibility and screen-reader feedback.",
      "Add additional game modes or challenges.",
      "Continue refining animations and game feedback.",
    ],

    githubUrl:
      "https://github.com/Pikero-bx33/assembly-endgame-next",

    liveUrl:
      "https://assembly-endgame-next.vercel.app/",
  },

  fr: {
    slug: "assembly-endgame",

    title: "Assembly: End Game",

    subtitle:
      "Un jeu inspiré du pendu, refactoré de React vers Next.js avec statistiques persistantes, indices et logique de jeu enrichie.",

    role: "Développeur solo",

    duration: "2026",

    status: "Terminé",

    overview: [
      "Assembly: End Game est à l'origine un projet d'apprentissage React réalisé dans le cadre du parcours Scrimba et inspiré du jeu du pendu.",
      "L'objectif de cette refonte était de transformer le projet en application autonome Next.js et TypeScript, tout en améliorant son architecture et en ajoutant de nouvelles fonctionnalités.",
      "Le joueur doit retrouver un mot caché avant que tous les langages de programmation soient éliminés et qu'Assembly ne devienne le dernier langage encore en jeu.",
    ],

    objectives: [
      "Refactorer le projet React original en application Next.js autonome.",
      "Approfondir la gestion du state et de la logique de jeu avec React.",
      "Utiliser TypeScript pour structurer les données du jeu et les statistiques.",
      "Séparer la logique métier, les composants UI et les fonctions utilitaires.",
      "Ajouter des statistiques persistantes et de nouvelles interactions.",
      "Déployer le projet comme application autonome en production.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "LocalStorage",
    ],

    keyFeatures: [
      "Gameplay inspiré du jeu du pendu.",
      "Génération aléatoire des mots.",
      "Clavier interactif à l'écran.",
      "Feedback visuel pour les bonnes et mauvaises réponses.",
      "Système d'élimination des langages de programmation.",
      "Gestion des états victoire et défaite.",
      "Système d'indices.",
      "Statistiques de jeu persistantes.",
      "Suivi des victoires, défaites et séries.",
      "Interface responsive.",
      "Gestion du restart et des nouvelles parties.",
    ],

    architecture: [
      "Next.js App Router utilisé comme framework de l'application.",
      "L'interface principale du jeu est gérée dans un Client Component interactif.",
      "Le mot initial est généré avant d'être transmis au composant principal du jeu.",
      "La logique de jeu est séparée de la présentation via des utilitaires et types dédiés.",
      "Un hook réutilisable gère les statistiques persistantes du joueur.",
      "LocalStorage permet de conserver les statistiques entre les sessions.",
      "Des types TypeScript structurent les résultats de partie et les statistiques.",
    ],

    challenges: [
      "Refactorer une logique de jeu React riche en state dans une architecture Next.js plus structurée.",
      "Maintenir des transitions de state prévisibles entre les réponses, victoires, défaites et nouvelles parties.",
      "Gérer les statistiques persistantes sans coupler directement la logique de stockage aux composants UI.",
      "Gérer une API navigateur comme LocalStorage dans une application Next.js.",
      "Séparer génération des mots, logique de jeu et composants visuels tout en conservant un code lisible.",
    ],

    lessons: [
      "Les projets de jeu sont particulièrement utiles pour approfondir la gestion du state et le rendu conditionnel.",
      "Extraire la persistance dans un hook dédié permet de garder les composants plus lisibles.",
      "TypeScript permet de rendre les différents états du jeu et les statistiques plus explicites.",
      "Séparer les utilitaires des composants facilite l'évolution d'une logique interactive complexe.",
      "Refactorer un projet React existant permet de mieux comprendre les différences d'architecture avec Next.js.",
    ],

    nextSteps: [
      "Ajouter des tests automatisés sur la logique principale du jeu.",
      "Développer davantage de catégories de mots et niveaux de difficulté.",
      "Améliorer encore l'accessibilité clavier et les retours pour les lecteurs d'écran.",
      "Ajouter de nouveaux modes de jeu ou challenges.",
      "Continuer à enrichir les animations et le feedback utilisateur.",
    ],

    githubUrl:
      "https://github.com/Pikero-bx33/assembly-endgame-next",

    liveUrl:
      "https://assembly-endgame-next.vercel.app/",
  },
};