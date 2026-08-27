import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const tenziesProject: Record<Locale, ProjectDetails> = {
  en: {
    slug: "tenzies",
    title: "Tenzies",
    role: "Solo Developer",
    duration: "2026",
    status: "Completed",

    subtitle:
      "An interactive dice game refactored from React into a structured Next.js and TypeScript application.",

    overview: [
      "Tenzies started as a small React project completed during the Scrimba React course.",
      "The original version focused on state management, immutable updates, component communication and basic game logic.",
      "I later refactored the application with Next.js and TypeScript, improved its component architecture and added game statistics, persistent records, accessibility improvements and responsive styling.",
    ],

    objectives: [
      "Consolidate core React state-management concepts.",
      "Migrate an existing React project to Next.js and TypeScript.",
      "Separate game logic, types and presentation.",
      "Add persistent game statistics.",
      "Improve accessibility and responsive design.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "App Router",
      "Local Storage",
    ],

    keyFeatures: [
      "Interactive ten-dice game.",
      "Ability to hold and release individual dice.",
      "Automatic victory detection.",
      "Roll counter and game timer.",
      "Persistent best time and lowest roll count.",
      "Confetti victory animation.",
      "Responsive interface and accessible controls.",
    ],

    architecture: [
      "Next.js App Router handles the application structure and page rendering.",
      "The interactive game is isolated in a Client Component.",
      "A client-only wrapper prevents hydration inconsistencies caused by randomly generated dice values.",
      "Typed reusable components separate the dice, statistics and main game interface.",
      "Shared utilities manage dice generation and immutable roll updates.",
      "Browser localStorage persists the player's best records.",
    ],

    challenges: [
      "Migrating randomly generated state without causing server and client hydration inconsistencies.",
      "Coordinating the timer, victory detection and game reset logic.",
      "Persisting records without introducing unnecessary state-update effects.",
      "Keeping state updates immutable while maintaining readable game logic.",
      "Improving the initial exercise without over-engineering a deliberately simple game.",
    ],

    lessons: [
      "Derived values such as the victory state do not always require additional React state.",
      "State should remain close to the component responsible for controlling it.",
      "Side effects must be separated from values calculated during rendering.",
      "Client-only rendering can be useful when initial UI data depends on browser-generated random values.",
      "Small learning projects are useful for practising refactoring and architecture decisions.",
    ],

    nextSteps: [
      "Add automated tests for the game logic and components.",
      "Introduce multiple difficulty levels.",
      "Add dice-roll animations and sound preferences.",
      "Allow players to reset their local records.",
      "Explore authenticated player profiles and an online leaderboard.",
    ],

    gallery: [
      {
        src: "/images/projects/tenzies/start-en.png",
        alt: "Tenzies game starting screen",
        caption:
          "New game with ten randomly generated dice ready to be played",
        aspect: "landscape",
      },
      {
        src: "/images/projects/tenzies/gameplay-en.png",
        alt: "Tenzies gameplay with held dice",
        caption:
          "Interactive gameplay with individual dice selection and hold states",
        aspect: "landscape",
      },
      {
        src: "/images/projects/tenzies/stats-en.png",
        alt: "Tenzies game statistics and records",
        caption:
          "Game progress with roll counter, timer and persistent personal records",
        aspect: "landscape",
      },
      {
        src: "/images/projects/tenzies/victory-en.png",
        alt: "Tenzies victory screen",
        caption:
          "Victory state with completed game statistics and confetti feedback",
        aspect: "landscape",
      },
    ],

    githubUrl: "https://github.com/Pikero-bx33/tenzies-next",
    liveUrl: "https://tenzies-next.vercel.app/",
  },

  fr: {
    slug: "tenzies",
    title: "Tenzies",
    role: "Développeur solo",
    duration: "2026",
    status: "Terminé",

    subtitle:
      "Jeu de dés interactif refactorisé depuis React vers une application structurée avec Next.js et TypeScript.",

    overview: [
      "Tenzies était initialement un petit projet React réalisé pendant la formation React de Scrimba.",
      "La première version permettait de travailler la gestion des états, les mises à jour immuables, la communication entre composants et la logique d'un jeu.",
      "J'ai ensuite refactorisé l'application avec Next.js et TypeScript, amélioré son architecture et ajouté des statistiques, des records persistants, une meilleure accessibilité et une interface responsive.",
    ],

    objectives: [
      "Consolider les concepts fondamentaux de gestion des états avec React.",
      "Migrer un projet React existant vers Next.js et TypeScript.",
      "Séparer la logique du jeu, les types et la présentation.",
      "Ajouter des statistiques persistantes.",
      "Améliorer l'accessibilité et le responsive design.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "App Router",
      "Local Storage",
    ],

    keyFeatures: [
      "Jeu interactif composé de dix dés.",
      "Possibilité de conserver ou libérer chaque dé.",
      "Détection automatique de la victoire.",
      "Compteur de lancers et chronomètre.",
      "Meilleur temps et minimum de lancers persistants.",
      "Animation de confettis après la victoire.",
      "Interface responsive et contrôles accessibles.",
    ],

    architecture: [
      "Next.js App Router gère la structure de l'application et le rendu de la page.",
      "La logique interactive du jeu est isolée dans un Client Component.",
      "Un wrapper chargé uniquement côté client évite les incohérences d'hydratation liées aux valeurs aléatoires.",
      "Des composants TypeScript réutilisables séparent les dés, les statistiques et l'interface principale.",
      "Des fonctions utilitaires partagées gèrent la génération et la mise à jour immuable des dés.",
      "Le localStorage du navigateur conserve les meilleurs résultats du joueur.",
    ],

    challenges: [
      "Migrer un état généré aléatoirement sans provoquer d'incohérence d'hydratation entre le serveur et le navigateur.",
      "Coordonner le chronomètre, la détection de victoire et la réinitialisation du jeu.",
      "Conserver les records sans introduire d'effets provoquant des mises à jour d'état inutiles.",
      "Maintenir des mises à jour d'état immuables tout en gardant une logique lisible.",
      "Enrichir un exercice volontairement simple sans créer une architecture excessive.",
    ],

    lessons: [
      "Une valeur dérivée comme l'état de victoire ne nécessite pas toujours un état React supplémentaire.",
      "Un état doit rester proche du composant responsable de son contrôle.",
      "Les effets de bord doivent être séparés des valeurs calculées pendant le rendu.",
      "Un chargement uniquement côté client peut être utile lorsque les données initiales reposent sur des valeurs aléatoires.",
      "Les petits projets d'apprentissage sont particulièrement utiles pour pratiquer le refactoring et les choix d'architecture.",
    ],

    nextSteps: [
      "Ajouter des tests automatisés sur la logique du jeu et les composants.",
      "Introduire plusieurs niveaux de difficulté.",
      "Ajouter des animations de lancer et des préférences sonores.",
      "Permettre la réinitialisation des records locaux.",
      "Explorer des profils authentifiés et un classement en ligne.",
    ],

    gallery: [
      {
        src: "/images/projects/tenzies/start-en.png",
        alt: "Écran de début de partie de Tenzies",
        caption:
          "Nouvelle partie avec dix dés générés aléatoirement prêts à être joués",
        aspect: "landscape",
      },
      {
        src: "/images/projects/tenzies/gameplay-en.png",
        alt: "Partie de Tenzies avec des dés conservés",
        caption:
          "Gameplay interactif avec sélection individuelle des dés à conserver",
        aspect: "landscape",
      },
      {
        src: "/images/projects/tenzies/stats-en.png",
        alt: "Statistiques et records du jeu Tenzies",
        caption:
          "Suivi de la partie avec compteur de lancers, chronomètre et records personnels persistants",
        aspect: "landscape",
      },
      {
        src: "/images/projects/tenzies/victory-en.png",
        alt: "Écran de victoire de Tenzies",
        caption:
          "État de victoire avec statistiques finales et animation de confettis",
        aspect: "landscape",
      },
    ],

    githubUrl: "https://github.com/Pikero-bx33/tenzies-next",
    liveUrl: "https://tenzies-next.vercel.app/",
  },
};