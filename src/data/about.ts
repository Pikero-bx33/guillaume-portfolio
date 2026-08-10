import type { Locale } from "@/types/locale";
import type { AboutContent } from "@/types/about";

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    eyebrow: "About me",
    title: "Business first.\nTech next.",
    highlights: [
      { label: "Experience", value: "15+ years" },
      { label: "Focus", value: "Marketplaces" },
      { label: "Development", value: "Full-Stack JS" },
      { label: "Mindset", value: "Business × Tech" },
    ],
    paragraphs: [
      "My career has been built around digital commerce, marketplaces and business development.",
      "Working closely with product and engineering teams over the years made me increasingly curious about how digital products are designed and built.",
      "That curiosity led me to complete a full-stack JavaScript program, allowing me to combine business expertise with hands-on technical skills.",
    ],
  },

  fr: {
    eyebrow: "À propos",
    title: "D'abord le business. Puis la tech.",
    highlights: [
      { label: "Expérience", value: "15+ ans" },
      { label: "Expertise", value: "Marketplaces" },
      { label: "Développement", value: "Full-Stack JS" },
      { label: "Approche", value: "Business × Tech" },
    ],
    paragraphs: [
      "Depuis plus de quinze ans, j'évolue dans l'univers du commerce digital, des marketplaces et du business development.",
      "En collaborant avec des équipes produit et techniques, j'ai progressivement eu envie de mieux comprendre comment les produits digitaux sont conçus et développés.",
      "Cette curiosité m'a conduit à suivre une formation Full-Stack JavaScript afin de compléter mon expertise métier par des compétences techniques concrètes.",
    ],
  },
};