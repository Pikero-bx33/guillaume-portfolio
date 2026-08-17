import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

export const portfolioProject: Record<Locale, ProjectDetails> = {
  en: {
    slug: "portfolio",
    title: "Personal Portfolio",

    subtitle:
      "A bilingual Next.js portfolio designed as a scalable platform to present my business, digital and technical experience.",

    role: "Solo Developer",

    duration: "2026",

    status: "Live",

    overview: [
      "This portfolio was designed as more than a digital CV. The goal was to build a scalable platform capable of presenting my professional journey, technical skills and projects in a clear and coherent way.",
      "The project evolved iteratively, starting from a mobile-first structure and progressively adding internationalisation, dynamic project pages, reusable case study components, responsive layouts, visual polish, SEO and production deployment.",
      "It also became a practical way to apply the same principles I wanted to demonstrate: clear architecture, reusable components, maintainable data structures and continuous improvement.",
    ],

    objectives: [
      "Build a professional portfolio with Next.js and TypeScript.",
      "Present a hybrid business, digital marketing and technical profile clearly.",
      "Support both English and French content.",
      "Create reusable components for future projects and case studies.",
      "Build a responsive mobile-first experience.",
      "Prepare the application for SEO and production deployment.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "App Router",
      "FontAwesome",
      "Vercel",
    ],

    keyFeatures: [
      "Bilingual FR / EN architecture.",
      "Dynamic project routes with App Router.",
      "Reusable project case study system.",
      "Data-driven content architecture.",
      "Responsive layouts across mobile, tablet, laptop and desktop.",
      "Downloadable CVs in French and English.",
      "SEO metadata, Open Graph, sitemap and robots configuration.",
      "Production deployment with Vercel.",
    ],

    architecture: [
      "The application uses the Next.js App Router with dynamic language and project routes.",
      "Content is separated from presentation through dedicated data files.",
      "Shared TypeScript models define contracts between data and components.",
      "Home sections and project case studies use reusable components with clear responsibilities.",
      "Project data is registered centrally so new case studies can be added without changing page routing logic.",
      "Responsive design is handled primarily through Tailwind breakpoints.",
      "Local and production URLs are managed through environment variables.",
    ],

    challenges: [
      "Designing an architecture that could evolve without continuously restructuring the codebase.",
      "Keeping bilingual content manageable across both the Home page and detailed project case studies.",
      "Balancing visual design with responsive behaviour across several breakpoints.",
      "Creating reusable case study components without over-engineering the project.",
      "Managing production concerns such as metadata, Open Graph assets, sitemap, robots and environment variables.",
      "Maintaining a consistent visual identity while progressively improving the design.",
    ],

    lessons: [
      "A clear data and component architecture makes future content changes much easier.",
      "Internationalisation is simpler when planned early rather than added at the end.",
      "Responsive design often requires changing layout structure, not just reducing font sizes.",
      "Reusable components are most valuable when their responsibilities remain narrow and explicit.",
      "Production readiness includes much more than simply making the application compile.",
      "Iterative development and frequent review can significantly improve both code quality and content quality.",
    ],

    nextSteps: [
      "Add detailed career experience pages.",
      "Continue improving accessibility and semantic structure.",
      "Expand project case studies as new projects are completed.",
      "Review analytics and usage once the portfolio receives real traffic.",
      "Consider adding a custom domain.",
      "Keep the portfolio content aligned with future CV updates.",
    ],

    gallery: [
      {
        src: "/images/projects/portfolio/hero-desktop.png",
        alt: "Personal portfolio homepage hero and navigation",
        caption: "Desktop hero, navigation and main positioning",
        aspect: "landscape",
      },
      {
        src: "/images/projects/portfolio/skills-desktop.png",
        alt: "Personal portfolio skills section",
        caption: "Business, digital marketing and technical skills",
        aspect: "landscape",
      },
      {
        src: "/images/projects/portfolio/projects-desktop.png",
        alt: "Personal portfolio projects section",
        caption: "Featured projects, case studies and learning projects",
        aspect: "landscape",
      },
      {
        src: "/images/projects/portfolio/mobile.png",
        alt: "Personal portfolio mobile view",
        caption: "Mobile-first responsive experience",
        aspect: "portrait",
      },
    ],

    githubUrl:
      "https://github.com/Pikero-bx33/guillaume-portfolio",

    liveUrl:
      "https://guillaume-legros.vercel.app",
  },

  fr: {
    slug: "portfolio",
    title: "Portfolio personnel",

    subtitle:
      "Un portfolio bilingue en Next.js conçu comme une plateforme évolutive pour présenter mon expérience business, digitale et technique.",

    role: "Développeur solo",

    duration: "2026",

    status: "En ligne",

    overview: [
      "Ce portfolio a été pensé comme bien plus qu'un simple CV en ligne. L'objectif était de construire une plateforme évolutive capable de présenter clairement mon parcours professionnel, mes compétences techniques et mes projets.",
      "Le projet a évolué de manière itérative, en partant d'une structure mobile-first puis en intégrant progressivement le bilingue, les pages projets dynamiques, des composants de case study réutilisables, le responsive, le polish visuel, le SEO et le déploiement en production.",
      "Il est également devenu un moyen concret d'appliquer les principes que je souhaitais démontrer : architecture claire, composants réutilisables, données maintenables et amélioration continue.",
    ],

    objectives: [
      "Construire un portfolio professionnel avec Next.js et TypeScript.",
      "Présenter clairement un profil hybride business, marketing digital et technique.",
      "Proposer une expérience bilingue français / anglais.",
      "Créer des composants réutilisables pour les futurs projets et case studies.",
      "Développer une expérience responsive en mobile-first.",
      "Préparer l'application pour le SEO et le déploiement en production.",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "App Router",
      "FontAwesome",
      "Vercel",
    ],

    keyFeatures: [
      "Architecture bilingue FR / EN.",
      "Routes projets dynamiques avec App Router.",
      "Système réutilisable de case studies.",
      "Architecture de contenu data-driven.",
      "Responsive mobile, tablette, laptop et desktop.",
      "CV téléchargeables en français et en anglais.",
      "Metadata SEO, Open Graph, sitemap et robots.",
      "Déploiement en production avec Vercel.",
    ],

    architecture: [
      "L'application utilise le Next.js App Router avec des routes dynamiques pour la langue et les projets.",
      "Le contenu est séparé de la présentation grâce à des fichiers de données dédiés.",
      "Des modèles TypeScript partagés définissent les contrats entre données et composants.",
      "Les sections de la Home et les case studies utilisent des composants réutilisables avec des responsabilités claires.",
      "Les données projets sont enregistrées dans un registre central afin d'ajouter de nouvelles case studies sans modifier la logique de routage.",
      "Le responsive est principalement géré via les breakpoints Tailwind.",
      "Les URLs locales et de production sont gérées via des variables d'environnement.",
    ],

    challenges: [
      "Concevoir une architecture capable d'évoluer sans réorganiser en permanence la base de code.",
      "Maintenir un contenu bilingue propre sur la Home et les case studies détaillées.",
      "Trouver un bon équilibre entre design visuel et comportement responsive sur plusieurs breakpoints.",
      "Créer des composants de case study réutilisables sans sur-complexifier le projet.",
      "Gérer les contraintes liées à la production : metadata, Open Graph, sitemap, robots et variables d'environnement.",
      "Conserver une identité visuelle cohérente tout en améliorant progressivement le design.",
    ],

    lessons: [
      "Une architecture claire entre données et composants facilite fortement les évolutions futures.",
      "L'internationalisation est beaucoup plus simple lorsqu'elle est pensée tôt dans le projet.",
      "Le responsive demande souvent de modifier la structure d'une interface, pas seulement la taille des textes.",
      "Les composants réutilisables sont surtout utiles lorsque leurs responsabilités restent simples et explicites.",
      "Préparer une application pour la production va bien au-delà du simple fait de la compiler.",
      "Une approche itérative et des revues régulières améliorent à la fois la qualité du code et celle du contenu.",
    ],

    nextSteps: [
      "Ajouter les pages détaillées du parcours professionnel.",
      "Continuer à améliorer l'accessibilité et la structure sémantique.",
      "Enrichir les case studies au fur et à mesure des nouveaux projets.",
      "Analyser l'utilisation du portfolio lorsqu'il recevra du trafic réel.",
      "Envisager l'ajout d'un nom de domaine personnalisé.",
      "Maintenir la cohérence entre le portfolio et les futures versions du CV.",
    ],

    gallery: [
      {
        src: "/images/projects/portfolio/hero-desktop.png",
        alt: "Hero et navigation du portfolio personnel",
        caption: "Hero desktop, navigation et positionnement principal",
        aspect: "landscape",
      },
      {
        src: "/images/projects/portfolio/skills-desktop.png",
        alt: "Section compétences du portfolio personnel",
        caption: "Compétences business, marketing digital et techniques",
        aspect: "landscape",
      },
      {
        src: "/images/projects/portfolio/projects-desktop.png",
        alt: "Section projets du portfolio personnel",
        caption: "Projets principaux, case studies et projets d'apprentissage",
        aspect: "landscape",
      },
      {
        src: "/images/projects/portfolio/mobile.png",
        alt: "Version mobile du portfolio personnel",
        caption: "Expérience responsive développée en mobile-first",
        aspect: "portrait",
      },
    ],

    githubUrl:
      "https://github.com/Pikero-bx33/guillaume-portfolio",

    liveUrl:
      "https://guillaume-legros.vercel.app",
  },
};