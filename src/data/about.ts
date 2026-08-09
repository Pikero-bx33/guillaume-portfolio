import type { Locale } from "@/types/locale";

type AboutContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    eyebrow: "About me",
    title: "Business first. Tech next.",
    paragraphs: [
      "My career has been built around e-commerce, marketplaces and business development.",
      "Working increasingly closely with product and technical teams made me want to understand what happens under the hood.",
      "Today, I combine that business experience with hands-on web development skills.",
    ],
  },

  fr: {
    eyebrow: "À propos",
    title: "D'abord le business. Puis la tech.",
    paragraphs: [
      "Mon parcours s'est construit autour de l'e-commerce, des marketplaces et du business development.",
      "En travaillant de plus en plus étroitement avec des équipes produit et techniques, j'ai eu envie de comprendre ce qui se passe sous le capot.",
      "Aujourd'hui, je combine cette expérience business avec des compétences concrètes en développement web.",
    ],
  },
};