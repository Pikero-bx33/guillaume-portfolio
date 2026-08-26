import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const curioLabProject: Record<Locale, ProjectDetails> = {
  en: {
    slug: "curio-lab",
    title: "CurioLab",
    role: "Solo Developer",
    duration: "2026",
    status: "MVP Completed",

    subtitle:
      "A bilingual science quiz built with Next.js and TypeScript, combining interactive gameplay, explanations and curated scientific sources.",

    overview: [
      "CurioLab is a bilingual science quiz designed to make scientific knowledge accessible through short and interactive quiz sessions.",
      "The application covers six scientific categories and three difficulty levels, with immediate answer feedback, explanations and source links.",
      "The MVP includes a curated local question bank of 180 questions in French and English, allowing the application to remain independent from external quiz APIs while maintaining control over the quality and structure of its content.",
    ],

    objectives: [
      "Build a complete interactive quiz application with Next.js and TypeScript.",
      "Create a bilingual French / English experience.",
      "Structure a reusable and strongly typed scientific question bank.",
      "Allow players to choose a scientific category and difficulty level.",
      "Provide educational feedback instead of limiting the experience to right or wrong answers.",
      "Validate application data with Zod.",
      "Create a responsive interface suitable for desktop and mobile.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS Modules",
      "Zod",
      "App Router",
    ],

    keyFeatures: [
      "Six science categories: Space, Physics, Life, Human Body, Earth and Technology.",
      "Three difficulty levels: Easy, Medium and Hard.",
      "180 curated bilingual science questions.",
      "Strict filtering by category and difficulty.",
      "Randomized question and answer ordering.",
      "Immediate correct / incorrect answer feedback.",
      "Educational explanation displayed after each answer.",
      "Scientific source links associated with questions.",
      "Five-second countdown before starting a quiz.",
      "Quiz progress indicator.",
      "French / English language selection.",
      "Responsive quiz interface.",
    ],

    architecture: [
      "Next.js App Router provides the application structure.",
      "Typed quiz settings define the selected language, category and difficulty.",
      "A local structured question bank provides the scientific content without relying on an external quiz API.",
      "Zod schemas validate the question dataset before it is used by the application.",
      "Question preparation utilities filter and shuffle the available questions according to the selected settings.",
      "The quiz flow separates the welcome/setup experience, countdown and interactive QuizScreen.",
      "CSS Modules keep component styling scoped while maintaining a responsive interface.",
    ],

    challenges: [
      "Designing a question structure capable of supporting the same scientific content in both French and English.",
      "Building and validating a sufficiently large dataset while maintaining consistent categories and difficulty levels.",
      "Guaranteeing enough questions for every possible category and difficulty combination.",
      "Managing quiz progression, answer selection and immediate feedback without creating unnecessary React state.",
      "Randomizing questions and answers while preserving their relationships and correct-answer references.",
      "Designing a responsive game interface that remains readable on both mobile and desktop.",
    ],

    lessons: [
      "A well-designed data model is essential when the same content must support multiple languages and filtering dimensions.",
      "Zod is useful beyond form validation and can protect an application from malformed local datasets.",
      "Derived quiz values should be calculated from existing state whenever possible rather than stored as additional state.",
      "Separating question preparation from the UI makes quiz logic easier to understand and evolve.",
      "Building a curated local dataset provides greater control over content quality than depending entirely on a third-party quiz API.",
      "Progressively separating setup, countdown and gameplay makes an interactive application easier to maintain.",
    ],

    nextSteps: [
      "Add persistent player statistics with localStorage.",
      "Track best scores and answer accuracy.",
      "Add quiz history and progression data.",
      "Implement an anti-repetition system to reduce repeated questions between sessions.",
      "Create a richer end-of-quiz results screen.",
      "Continue expanding the scientific question bank.",
    ],

    githubUrl: "https://github.com/Pikero-bx33/curio-lab",
    liveUrl: "https://curio-lab-delta.vercel.app/",
  },

  fr: {
    slug: "curio-lab",
    title: "CurioLab",
    role: "Développeur solo",
    duration: "2026",
    status: "MVP terminé",

    subtitle:
      "Quiz scientifique bilingue développé avec Next.js et TypeScript, combinant gameplay interactif, explications et sources scientifiques.",

    overview: [
      "CurioLab est un quiz scientifique bilingue conçu pour rendre les connaissances scientifiques accessibles à travers des sessions courtes et interactives.",
      "L'application couvre six catégories scientifiques et trois niveaux de difficulté, avec correction immédiate, explications et liens vers les sources.",
      "Le MVP repose sur une banque locale de 180 questions en français et en anglais, permettant de rester indépendant des API de quiz externes tout en gardant le contrôle sur la qualité et la structure du contenu.",
    ],

    objectives: [
      "Construire une application de quiz interactive complète avec Next.js et TypeScript.",
      "Proposer une expérience bilingue français / anglais.",
      "Structurer une banque de questions scientifiques réutilisable et fortement typée.",
      "Permettre au joueur de choisir une catégorie scientifique et un niveau de difficulté.",
      "Apporter une dimension pédagogique grâce aux explications après chaque réponse.",
      "Valider les données de l'application avec Zod.",
      "Créer une interface responsive adaptée au desktop et au mobile.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS Modules",
      "Zod",
      "App Router",
    ],

    keyFeatures: [
      "Six catégories scientifiques : Espace, Physique, Vivant, Corps humain, Terre et Technologie.",
      "Trois niveaux de difficulté : Facile, Moyen et Difficile.",
      "180 questions scientifiques bilingues.",
      "Filtrage strict par catégorie et difficulté.",
      "Ordre aléatoire des questions et des réponses.",
      "Correction immédiate après chaque réponse.",
      "Explication pédagogique associée à chaque question.",
      "Liens vers les sources scientifiques.",
      "Compte à rebours de cinq secondes avant le quiz.",
      "Indicateur de progression.",
      "Sélection de la langue français / anglais.",
      "Interface responsive.",
    ],

    architecture: [
      "Next.js App Router structure l'application.",
      "Des paramètres typés définissent la langue, la catégorie et le niveau de difficulté sélectionnés.",
      "Une banque locale structurée fournit le contenu scientifique sans dépendre d'une API de quiz externe.",
      "Des schémas Zod valident les données des questions avant leur utilisation par l'application.",
      "Des fonctions utilitaires préparent les questions en appliquant les filtres et la randomisation nécessaires.",
      "Le parcours du quiz sépare l'écran d'accueil et de configuration, le compte à rebours et le QuizScreen interactif.",
      "Les CSS Modules permettent de conserver des styles isolés par composant tout en assurant le responsive.",
    ],

    challenges: [
      "Concevoir une structure de données capable de gérer un même contenu scientifique en français et en anglais.",
      "Construire et valider une banque suffisamment importante tout en maintenant la cohérence des catégories et niveaux.",
      "Garantir suffisamment de questions pour chaque combinaison catégorie / difficulté.",
      "Gérer la progression du quiz, la sélection des réponses et le feedback immédiat sans multiplier inutilement les états React.",
      "Randomiser les questions et les réponses tout en conservant leurs relations et la bonne réponse.",
      "Construire une interface de jeu lisible aussi bien sur mobile que sur desktop.",
    ],

    lessons: [
      "Un modèle de données bien conçu devient essentiel lorsqu'un même contenu doit gérer plusieurs langues et dimensions de filtrage.",
      "Zod peut être utilisé au-delà des formulaires pour protéger une application contre des datasets locaux mal structurés.",
      "Les valeurs dérivées du quiz doivent être calculées à partir des états existants lorsque cela est possible.",
      "Séparer la préparation des questions de l'interface rend la logique du quiz plus facile à comprendre et à faire évoluer.",
      "Une banque de données locale et maîtrisée offre davantage de contrôle sur la qualité du contenu qu'une dépendance totale à une API externe.",
      "Séparer progressivement la configuration, le compte à rebours et le gameplay améliore la maintenabilité d'une application interactive.",
    ],

    nextSteps: [
      "Ajouter des statistiques persistantes avec localStorage.",
      "Enregistrer les meilleurs scores et le taux de bonnes réponses.",
      "Ajouter un historique des quiz et des données de progression.",
      "Mettre en place un système anti-répétition entre les sessions.",
      "Enrichir l'écran de résultats de fin de quiz.",
      "Continuer à développer la banque de questions scientifiques.",
    ],

    githubUrl: "https://github.com/Pikero-bx33/curio-lab",
    liveUrl: "https://curio-lab-delta.vercel.app/",
  },
};