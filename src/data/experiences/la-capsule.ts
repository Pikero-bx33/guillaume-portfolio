import type { Locale } from "@/types/locale";
import type { ExperienceDetails } from "@/types/experienceDetails";

export const laCapsuleExperience: Record<Locale, ExperienceDetails> = {
  en: {
    slug: "la-capsule",
    company: "La Capsule",
    category: "training",
    location: "Remote",
    period: "2025–2026",

    title: "Full-Stack JavaScript Training",
    subtitle:
      "A six-month full-stack JavaScript program designed to add hands-on technical skills to my business, digital marketing and e-commerce experience.",

    overview: [
      "I joined La Capsule to strengthen the technical side of my profile and better understand how modern digital products are built.",
      "The program focused on full-stack JavaScript development and combined frontend, backend, database and mobile development through a large number of practical projects.",
      "The training concluded with EcoProfs, a team-based mobile marketplace MVP developed with React Native, Express and MongoDB and presented in front of a jury.",
    ],

    responsibilities: [
      "Build frontend applications with React and Next.js.",
      "Develop mobile applications with React Native and Expo.",
      "Use TypeScript across frontend and backend projects.",
      "Build REST APIs with Node.js and Express.",
      "Model and manage data with MongoDB and Mongoose.",
      "Validate application data with Zod.",
      "Integrate mobile capabilities such as camera and geolocation.",
      "Work on authentication, state management and API integration.",
      "Develop multiple learning projects to practice application logic and architecture.",
      "Collaborate on a final team project using a sprint-based workflow.",
    ],

    achievements: [
      "Built a broad set of frontend, backend and mobile projects during the program.",
      "Progressed from React fundamentals to Next.js, React Native and TypeScript.",
      "Built and integrated REST APIs with Express and MongoDB.",
      "Worked with mobile features including camera and geolocation.",
      "Contributed to EcoProfs, the final project presented as a functional MVP in front of a jury.",
      "Added practical technical understanding to an existing business and digital background.",
    ],

    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Zod",
      "REST APIs",
      "Redux Toolkit",
      "Git",
      "Responsive Design",
      "Mobile Development",
    ],

    lessons: [
      "Understanding how an application is built changes the way I think about digital products and technical constraints.",
      "Application architecture and component organisation are as important as writing individual features.",
      "TypeScript improves maintainability when types are treated as shared contracts.",
      "Frontend, backend and data models need to evolve together around clear API contracts.",
      "Building many small projects is an effective way to strengthen application logic and problem-solving skills.",
      "My technical training complements rather than replaces my previous business, e-commerce and digital marketing experience.",
    ],
    logo: "/images/companies/la-capsule.png",
    logoAlt: "La capsule logo",
  },

  fr: {
    slug: "la-capsule",
    company: "La Capsule",
    category: "training",
    location: "À distance",
    period: "2025–2026",

    title: "Formation Full-Stack JavaScript",
    subtitle:
      "Une formation de six mois en développement Full-Stack JavaScript visant à ajouter une vraie brique technique à mon expérience business, marketing digital et e-commerce.",

    overview: [
      "J'ai rejoint La Capsule afin de renforcer la dimension technique de mon profil et de mieux comprendre comment sont construits les produits digitaux modernes.",
      "La formation était centrée sur le développement Full-Stack JavaScript et combinait frontend, backend, base de données et développement mobile à travers de nombreux projets pratiques.",
      "Elle s'est terminée par EcoProfs, un MVP de marketplace mobile développé en équipe avec React Native, Express et MongoDB puis présenté devant un jury.",
    ],

    responsibilities: [
      "Développer des interfaces frontend avec React et Next.js.",
      "Créer des applications mobiles avec React Native et Expo.",
      "Utiliser TypeScript sur des projets frontend et backend.",
      "Construire des API REST avec Node.js et Express.",
      "Modéliser et gérer les données avec MongoDB et Mongoose.",
      "Valider les données applicatives avec Zod.",
      "Intégrer des fonctionnalités mobiles comme la caméra et la géolocalisation.",
      "Travailler sur l'authentification, la gestion d'état et l'intégration d'API.",
      "Réaliser de nombreux projets d'apprentissage pour travailler la logique et l'architecture applicative.",
      "Collaborer sur un projet final en équipe avec une organisation par sprints.",
    ],

    achievements: [
      "Réalisation de nombreux projets frontend, backend et mobile pendant la formation.",
      "Progression des fondamentaux React vers Next.js, React Native et TypeScript.",
      "Construction et intégration d'API REST avec Express et MongoDB.",
      "Utilisation de fonctionnalités mobiles comme la caméra et la géolocalisation.",
      "Contribution à EcoProfs, projet final présenté sous la forme d'un MVP fonctionnel devant un jury.",
      "Ajout d'une compréhension technique concrète à mon parcours business et digital.",
    ],

    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Zod",
      "API REST",
      "Redux Toolkit",
      "Git",
      "Responsive Design",
      "Développement mobile",
    ],

    lessons: [
      "Comprendre comment une application est construite change la manière d'aborder les produits digitaux et les contraintes techniques.",
      "L'architecture et l'organisation des composants sont aussi importantes que le développement des fonctionnalités elles-mêmes.",
      "TypeScript améliore réellement la maintenabilité lorsque les types servent de contrats partagés.",
      "Frontend, backend et modèles de données doivent évoluer ensemble autour de contrats d'API clairs.",
      "Multiplier les petits projets est un excellent moyen de renforcer la logique applicative et la résolution de problèmes.",
      "Cette formation technique complète mon expérience business, e-commerce et marketing digital plutôt qu'elle ne la remplace.",
    ],
    logo: "/images/companies/la-capsule.png",
    logoAlt: "La capsule logo",
  },
};