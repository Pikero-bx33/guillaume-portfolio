import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const dishcoveryProject: Record<
  Locale,
  ProjectDetails
> = {
  en: {
    slug: "dishcovery",
    title: "Dishcovery",
    role: "Solo Developer",
    duration: "2026",
    status: "Completed",

    subtitle:
      "A bilingual AI-powered recipe generator that creates structured recipes and unique images from the ingredients available at home.",

    overview: [
      "Dishcovery is a complete Next.js and TypeScript refactor of Chef Claude, a small React project originally completed during the Scrimba React course.",
      "The initial project generated a Markdown recipe from a simple list of ingredients. I redesigned the experience around a bilingual recipe workspace with preferences, structured AI responses, generated food photography and responsive presentation.",
      "The public application also includes server-side validation, anonymous Redis rate limiting and OpenAI budget controls to protect the API from excessive or abusive usage.",
    ],

    objectives: [
      "Refactor an existing React learning project with Next.js and TypeScript.",
      "Build a complete bilingual French and English user experience.",
      "Generate predictable and type-safe recipe data with AI.",
      "Generate a unique image matching each proposed dish.",
      "Protect a public paid API with server-side validation and usage limits.",
      "Deploy a secure serverless application on Vercel.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "OpenAI API",
      "Structured Outputs",
      "GPT Image",
      "Upstash Redis",
      "Vercel",
    ],

    keyFeatures: [
      "Bilingual French and English interface.",
      "Interactive ingredient addition and removal.",
      "Cooking time, difficulty, serving and dietary preferences.",
      "Structured AI-generated recipes validated with Zod.",
      "Unique AI-generated image for each finished dish.",
      "Clear loading, validation, success and error states.",
      "Three daily generations per anonymous visitor.",
      "Global daily generation limit and monthly OpenAI budget protection.",
      "Responsive layout designed for desktop, laptop, tablet and mobile screens.",
    ],

    architecture: [
      "Next.js App Router manages localized pages and the server-side recipe API route.",
      "A Client Component controls ingredients, preferences, network requests and the different interface states.",
      "The OpenAI Responses API generates a recipe matching a strict Zod schema instead of returning unstructured Markdown.",
      "A second OpenAI call uses the structured recipe's visual brief to generate a compressed WebP image of the finished dish.",
      "Upstash Redis stores temporary anonymous visitor and global counters shared between Vercel serverless function instances.",
      "Redis namespaces isolate development, preview and production traffic.",
      "API keys, Redis credentials and hashing secrets remain exclusively on the server.",
    ],

    challenges: [
      "Transforming an unstructured Markdown AI response into predictable recipe data suitable for a typed interface.",
      "Coordinating two paid AI operations while preserving clear loading and error states.",
      "Transporting a generated image without adding permanent file storage to the V1 architecture.",
      "Protecting the public API without requiring visitors to create an account.",
      "Applying per-visitor and global limits consistently across stateless Vercel functions.",
      "Keeping the complete desktop workspace visible on laptop screens while maintaining a natural mobile layout.",
    ],

    lessons: [
      "AI responses should be treated as external data and validated before being trusted by the application.",
      "Structured Outputs provide a more reliable UI integration than rendering arbitrary Markdown.",
      "Paid public APIs require both application-level limits and provider-level spending controls.",
      "Redis provides shared state for serverless functions that cannot rely on persistent application memory.",
      "Anonymous rate limiting can reduce abuse without storing raw IP addresses or personal recipe data.",
      "Specialized AI models can be combined into a controlled multi-step generation pipeline.",
    ],

    nextSteps: [
      "Add automated tests for request validation, rate-limit errors and recipe rendering.",
      "Store selected recipes and images in a persistent recipe collection.",
      "Allow visitors to download or print their generated recipe.",
      "Add optional authenticated profiles and personal recipe history.",
      "Introduce progressive generation feedback or streamed recipe output.",
      "Add social sharing metadata for individual saved recipes.",
    ],

    gallery: [
      {
        src: "/images/projects/dishcovery/home-en.png",
        alt: "Dishcovery English recipe workspace",
        caption:
          "Bilingual recipe workspace with ingredients and cooking preferences",
        aspect: "landscape",
      },
      {
        src: "/images/projects/dishcovery/loading-en.png",
        alt: "Dishcovery AI recipe and image loading state",
        caption:
          "Accessible loading state while the recipe and dish image are generated",
        aspect: "landscape",
      },
      {
        src: "/images/projects/dishcovery/recipe-en.png",
        alt: "Dishcovery generated recipe and dish image",
        caption:
          "Structured recipe result with a unique AI-generated image of the finished dish",
        aspect: "landscape",
      },
      {
        src: "/images/projects/dishcovery/mobile-en.png",
        alt: "Dishcovery mobile recipe interface",
        caption:
          "Responsive mobile interface with ingredient controls and recipe preferences",
        aspect: "portrait",
      },
    ],

    githubUrl:
      "https://github.com/Pikero-bx33/dishcovery",
    liveUrl:
      "https://dishcovery-sigma.vercel.app/en",
  },

  fr: {
    slug: "dishcovery",
    title: "Dishcovery",
    role: "Développeur solo",
    duration: "2026",
    status: "Terminé",

    subtitle:
      "Générateur de recettes bilingue propulsé par l’IA, capable de créer une recette structurée et une image unique à partir des ingrédients disponibles.",

    overview: [
      "Dishcovery est une refonte complète avec Next.js et TypeScript de Chef Claude, un petit projet React initialement réalisé pendant la formation React de Scrimba.",
      "Le projet original générait une recette au format Markdown à partir d'une simple liste d'ingrédients. J'ai entièrement repensé l'expérience autour d'un espace de création bilingue intégrant des préférences, des réponses IA structurées, une photographie générée et une interface responsive.",
      "L'application publique intègre également une validation côté serveur, une limitation anonyme avec Redis et des contrôles de budget OpenAI afin de protéger l'API contre une utilisation excessive ou abusive.",
    ],

    objectives: [
      "Refactoriser un projet d'apprentissage React avec Next.js et TypeScript.",
      "Construire une expérience utilisateur complète en français et en anglais.",
      "Générer des données de recette prévisibles et typées avec l'IA.",
      "Créer une image unique correspondant à chaque plat proposé.",
      "Protéger une API publique payante avec une validation serveur et des limites d'utilisation.",
      "Déployer une application serverless sécurisée sur Vercel.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "API OpenAI",
      "Structured Outputs",
      "GPT Image",
      "Upstash Redis",
      "Vercel",
    ],

    keyFeatures: [
      "Interface bilingue en français et en anglais.",
      "Ajout et suppression interactifs des ingrédients.",
      "Préférences de temps, difficulté, portions et régime alimentaire.",
      "Recettes structurées générées par IA et validées avec Zod.",
      "Image unique générée par IA pour chaque plat.",
      "États de chargement, validation, succès et erreur clairement identifiés.",
      "Trois générations quotidiennes par visiteur anonyme.",
      "Limite quotidienne globale et protection du budget mensuel OpenAI.",
      "Interface responsive pour ordinateur, tablette et mobile.",
    ],

    architecture: [
      "Next.js App Router gère les pages localisées et la route API serveur chargée de générer les recettes.",
      "Un Client Component contrôle les ingrédients, les préférences, les requêtes réseau et les différents états de l'interface.",
      "L'API Responses d'OpenAI génère une recette conforme à un schéma Zod strict plutôt qu'un contenu Markdown non structuré.",
      "Un second appel OpenAI utilise le brief visuel de la recette pour générer une image WebP compressée du plat terminé.",
      "Upstash Redis conserve des compteurs temporaires anonymes partagés entre les différentes fonctions serverless de Vercel.",
      "Des espaces de clés Redis distincts isolent les environnements de développement, preview et production.",
      "Les clés API, identifiants Redis et secrets de hachage restent exclusivement côté serveur.",
    ],

    challenges: [
      "Transformer une réponse IA Markdown non structurée en données de recette prévisibles et adaptées à une interface typée.",
      "Coordonner deux opérations IA payantes tout en conservant des états de chargement et d'erreur compréhensibles.",
      "Transporter une image générée sans ajouter de stockage permanent à l'architecture de la V1.",
      "Protéger l'API publique sans obliger les visiteurs à créer un compte.",
      "Appliquer des limites individuelles et globales cohérentes entre plusieurs fonctions serverless Vercel.",
      "Maintenir l'espace de travail complet visible sur un écran d'ordinateur portable tout en conservant une expérience mobile naturelle.",
    ],

    lessons: [
      "Les réponses d'une IA doivent être considérées comme des données externes et validées avant d'être utilisées par l'application.",
      "Structured Outputs offre une intégration d'interface plus fiable que le rendu d'un contenu Markdown arbitraire.",
      "Une API publique payante nécessite des limites applicatives ainsi que des contrôles de dépenses chez le fournisseur.",
      "Redis fournit un état partagé aux fonctions serverless qui ne peuvent pas dépendre d'une mémoire applicative persistante.",
      "Une limitation anonyme permet de réduire les abus sans conserver les adresses IP brutes ni les recettes des visiteurs.",
      "Des modèles IA spécialisés peuvent être combinés dans un pipeline de génération contrôlé en plusieurs étapes.",
    ],

    nextSteps: [
      "Ajouter des tests automatisés pour la validation, les limites d'utilisation et le rendu des recettes.",
      "Conserver certaines recettes et images dans une collection persistante.",
      "Permettre le téléchargement ou l'impression d'une recette.",
      "Ajouter des profils optionnels et un historique personnel.",
      "Introduire un retour de progression plus détaillé ou une génération progressive.",
      "Ajouter des métadonnées de partage pour les recettes sauvegardées.",
    ],

    gallery: [
      {
        src: "/images/projects/dishcovery/home-fr.png",
        alt: "Espace de création de recette Dishcovery en français",
        caption:
          "Espace de création bilingue avec ingrédients et préférences de préparation",
        aspect: "landscape",
      },
      {
        src: "/images/projects/dishcovery/loading-fr.png",
        alt: "État de chargement de la recette et de l'image Dishcovery",
        caption:
          "État de chargement accessible pendant la génération de la recette et de son image",
        aspect: "landscape",
      },
      {
        src: "/images/projects/dishcovery/recipe-fr.png",
        alt: "Recette et image de plat générées par Dishcovery",
        caption:
          "Recette structurée accompagnée d'une image unique du plat générée par IA",
        aspect: "landscape",
      },
      {
        src: "/images/projects/dishcovery/mobile-fr.png",
        alt: "Interface mobile de Dishcovery en français",
        caption:
          "Interface mobile responsive avec gestion des ingrédients et préférences",
        aspect: "portrait",
      },
    ],

    githubUrl:
      "https://github.com/Pikero-bx33/dishcovery",
    liveUrl:
      "https://dishcovery-sigma.vercel.app/fr",
  },
};