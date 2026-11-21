import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const myNewsProject: Record<Locale, ProjectDetails> = {
  en: {
    slug: "mynews",
    title: "myNews",
    logo: "/images/projects/mynews/mynews-mark.png",
    role: "Solo Developer",
    duration: "2026",
    status: "Completed",

    subtitle:
      "A personalised news application built from a single Expo codebase for native and web, with authentication, preferences and a tailored reading feed.",

    overview: [
      "myNews is a personalised news aggregator designed to give readers a more relevant feed without requiring separate mobile and web applications.",
      "Users can create an account, define topics, keywords and languages, then browse a feed based on those preferences. The experience also includes favourites, explicit read and unread states, preference editing and progressive loading for additional articles.",
      "The project combines an Expo frontend with an Express and MongoDB backend, with authentication and deployment decisions shaped around supporting both native clients and browsers from the same product architecture.",
    ],

    objectives: [
      "Build a personalised news experience for native and web from one codebase.",
      "Provide account-based preferences for topics, keywords and languages.",
      "Create a clear reading workflow with favourites and explicit read states.",
      "Keep shared user state focused and predictable across the application.",
      "Deploy a frontend and backend with secure authentication and production-ready domain configuration.",
    ],

    techStack: [
      "React Native",
      "Expo SDK 58",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "TheNewsAPI",
      "Render",
    ],

    keyFeatures: [
      "Account creation and authentication across native and web clients.",
      "Personal preferences for topics, keywords and languages.",
      "Personalised news feed powered by those preferences.",
      "Load More pagination for progressively browsing articles.",
      "Saved favourites and explicit read or unread article states.",
      "Editable preferences without leaving the product flow.",
      "Mobile-first interface adapted for wider web screens.",
    ],

    architecture: [
      "React Native, Expo SDK 58 and Expo Router provide a shared TypeScript application for native and web.",
      "Redux Toolkit is limited to shared user state, keeping local interface state close to the screens that own it.",
      "A Node.js and Express API separates authentication, user preferences and news aggregation from the client application.",
      "MongoDB and Mongoose persist user accounts, preferences, favourites and reading-state data.",
      "Better Auth supports different session storage and API transport needs: Secure Store on native clients and cookies in the browser.",
      "TheNewsAPI supplies news content, while the application layer applies the user's selected topics, keywords and languages.",
      "The Expo web frontend is deployed as a Render Static Site at app.mynewsfeed.fyi, while the Express API runs as a separate Render Web Service at api.mynewsfeed.fyi.",
    ],

    challenges: [
      "Supporting authentication across platforms required different session storage and transport models: Secure Store for native clients and browser cookies for web.",
      "Cross-site cookies initially worked in Chrome but exposed Safari restrictions around SameSite behaviour and third-party cookies.",
      "Moving the frontend and API to subdomains of the same parent domain made the browser session model more reliable while preserving a clear frontend and backend separation.",
      "CORS and Better Auth trusted origins needed an explicit, restrictive configuration rather than wildcard access.",
      "Deployment involved coordinating Render Static Site and Web Service settings, custom DNS records, HTTPS and environment variables across local and production builds.",
      "The mobile-first interface needed web-specific width constraints and wrappers to remain comfortable on desktop screens without becoming a separate web application.",
    ],

    lessons: [
      "A feature working locally is only the starting point; production readiness also depends on browser policies, domains, HTTPS and deployment configuration.",
      "Browser authentication requires careful attention to cookie scope, SameSite behaviour and differences between Safari and Chrome.",
      "CORS and trusted-origin rules are core parts of an authentication architecture, not deployment details to add at the end.",
      "Custom domains and DNS decisions can directly affect how a cross-origin application behaves.",
      "A simple, portable architecture makes it easier to diagnose production issues and evolve the product safely.",
      "A single Expo codebase can provide a strong foundation for native and web when platform-specific constraints are handled deliberately.",
    ],

    nextSteps: [
      "Continue refining the web experience and desktop-specific interaction polish.",
      "Explore EAS native builds and potential App Store distribution at a later stage.",
      "Improve feed personalisation as more preference signals become available.",
      "Refine source selection and management for greater feed control.",
      "Consider social features only after the core reading and personalisation experience has matured.",
    ],

    gallery: [
      {
        src: "/images/projects/mynews/login.png",
        alt: "myNews login screen",
        caption: "Log in securely and validate your authentication details",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/register.png",
        alt: "myNews registration screen",
        caption: "Create an account to access the app and manage your preferences",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/preferences.png",
        alt: "myNews preferences screen",
        caption: "Manage your preferences to get a personalized news feed",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/saved.png",
        alt: "myNews saved articles screen",
        caption: "Save your favorite articles and find them easily later",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/home.png",
        alt: "myNews home screen",
        caption: "Access your daily news based on your topics, keywords, and language preferences",
        aspect: "portrait",
      },
    ],

    githubUrl: "https://github.com/Pikero-bx33/myNews",
    liveUrl: "https://app.mynewsfeed.fyi",
  },

  fr: {
    slug: "mynews",
    title: "myNews",
    logo: "/images/projects/mynews/mynews-mark.png",
    role: "Développeur solo",
    duration: "2026",
    status: "Terminé",

    subtitle:
      "Application d'actualités personnalisée développée depuis une même codebase Expo pour le natif et le Web, avec authentification, préférences et feed de lecture adapté.",

    overview: [
      "myNews est un agrégateur d'actualités personnalisé conçu pour proposer un feed plus pertinent sans maintenir deux applications distinctes pour le mobile et le Web.",
      "Les utilisateurs peuvent créer un compte, définir leurs thèmes, mots-clés et langues, puis consulter un feed adapté à ces préférences. L'expérience comprend également les favoris, des états de lecture explicites, la modification des préférences et un chargement progressif d'articles supplémentaires.",
      "Le projet associe un frontend Expo à un backend Express et MongoDB. Les choix d'authentification et de déploiement ont été pensés pour prendre en charge les clients natifs et les navigateurs avec une même architecture produit.",
    ],

    objectives: [
      "Construire une expérience d'actualités personnalisée pour le natif et le Web depuis une même codebase.",
      "Proposer des préférences de compte par thèmes, mots-clés et langues.",
      "Créer un parcours de lecture clair avec favoris et états de lecture explicites.",
      "Garder l'état utilisateur partagé ciblé et prévisible dans l'application.",
      "Déployer un frontend et un backend avec une authentification sécurisée et une configuration de domaines adaptée à la production.",
    ],

    techStack: [
      "React Native",
      "Expo SDK 58",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "TheNewsAPI",
      "Render",
    ],

    keyFeatures: [
      "Création de compte et authentification sur clients natifs et Web.",
      "Préférences personnalisées par thèmes, mots-clés et langues.",
      "Feed d'actualités adapté à ces préférences.",
      "Pagination Load More pour consulter progressivement davantage d'articles.",
      "Favoris et états de lecture ou non-lus explicites.",
      "Modification des préférences directement dans le parcours produit.",
      "Interface mobile-first adaptée aux écrans Web plus larges.",
    ],

    architecture: [
      "React Native, Expo SDK 58 et Expo Router fournissent une application TypeScript partagée pour le natif et le Web.",
      "Redux Toolkit est limité à l'état utilisateur partagé afin de conserver l'état d'interface local au plus près des écrans qui le contrôlent.",
      "Une API Node.js et Express sépare l'authentification, les préférences utilisateur et l'agrégation d'actualités de l'application cliente.",
      "MongoDB et Mongoose persistent les comptes, préférences, favoris et états de lecture des utilisateurs.",
      "Better Auth prend en charge des besoins distincts de stockage de session et de transport API : Secure Store côté natif et cookies dans le navigateur.",
      "TheNewsAPI fournit le contenu d'actualité, tandis que la couche applicative applique les thèmes, mots-clés et langues sélectionnés par l'utilisateur.",
      "Le frontend Expo Web est déployé sur Render Static Site à l'adresse app.mynewsfeed.fyi, tandis que l'API Express fonctionne dans un Render Web Service séparé à l'adresse api.mynewsfeed.fyi.",
    ],

    challenges: [
      "Prendre en charge l'authentification sur plusieurs plateformes a nécessité des modèles distincts de stockage de session et de transport : Secure Store côté natif et cookies dans le navigateur.",
      "Les cookies cross-site fonctionnaient d'abord dans Chrome, mais les restrictions de Safari liées à SameSite et aux cookies tiers ont révélé une limite importante.",
      "Déplacer le frontend et l'API sur des sous-domaines d'un même domaine parent a rendu le modèle de session navigateur plus fiable tout en conservant une séparation claire entre frontend et backend.",
      "CORS et les trusted origins de Better Auth ont demandé une configuration explicite et restrictive, sans wildcard.",
      "Le déploiement a impliqué de coordonner Render Static Site et Web Service, les enregistrements DNS personnalisés, HTTPS et les variables d'environnement entre builds locaux et production.",
      "L'interface mobile-first nécessitait des contraintes de largeur et des wrappers spécifiques au Web pour rester agréable sur desktop sans devenir une application Web séparée.",
    ],

    lessons: [
      "Le bon fonctionnement d'une fonctionnalité en local n'est qu'un point de départ : la mise en production dépend aussi des politiques navigateur, des domaines, de HTTPS et de la configuration de déploiement.",
      "L'authentification dans un navigateur exige une attention particulière au périmètre des cookies, au comportement SameSite et aux différences entre Safari et Chrome.",
      "Les règles CORS et trusted origins font partie intégrante d'une architecture d'authentification, et non d'un détail à ajouter en fin de projet.",
      "Les choix de domaines personnalisés et de DNS peuvent modifier directement le comportement d'une application cross-origin.",
      "Une architecture simple et portable facilite le diagnostic des problèmes de production et l'évolution du produit.",
      "Une seule codebase Expo constitue une base solide pour le natif et le Web lorsque les contraintes de chaque plateforme sont traitées de façon explicite.",
    ],

    nextSteps: [
      "Continuer à améliorer l'expérience Web et les détails d'interaction propres au desktop.",
      "Explorer plus tard les builds natifs EAS et une éventuelle distribution sur l'App Store.",
      "Améliorer la personnalisation du feed à mesure que davantage de signaux de préférence sont disponibles.",
      "Affiner la sélection et la gestion des sources pour renforcer le contrôle sur le feed.",
      "Envisager des fonctionnalités sociales uniquement après la maturation de l'expérience centrale de lecture et de personnalisation.",
    ],

    gallery: [
      {
        src: "/images/projects/mynews/login.png",
        alt: "Écran de connexion myNews",
        caption: "Connectez-vous de manière sécurisée et validez vos informations d’authentification",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/register.png",
        alt: "Écran d’inscription myNews",
        caption: "Créez votre compte pour accéder à l’application et gérer vos préférences",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/preferences.png",
        alt: "Écran des préférences myNews",
        caption: "Gérez vos préférences pour obtenir un fil d’actualité personnalisé",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/saved.png",
        alt: "Écran des articles enregistrés myNews",
        caption: "Enregistrez vos articles favoris pour les retrouver facilement plus tard",
        aspect: "portrait",
      },
      {
        src: "/images/projects/mynews/home.png",
        alt: "Écran d’accueil myNews",
        caption: "Accédez à votre actualité quotidienne selon vos thèmes, mots-clés et langues préférés",
        aspect: "portrait",
      },
    ],

    githubUrl: "https://github.com/Pikero-bx33/myNews",
    liveUrl: "https://app.mynewsfeed.fyi",
  },
};
