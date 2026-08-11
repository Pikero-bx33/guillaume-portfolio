import type { Locale } from "@/types/locale";
import type { SkillsContent } from "@/types/skills";

export const skillsContent: Record<Locale, SkillsContent> = {
  en: {
    eyebrow: "Skills",
    title: "Business meets technology.",
    description:
      "A hybrid profile combining marketplace expertise, business development and hands-on web development skills.",
    groups: [
      {
        title: "Business",
        skills: [
          "Business Development",
          "Marketplaces",
          "E-commerce",
          "Digital Marketing",
          "Seller Acquisition",
          "MEDDIC / Discovery",
        ],
      },
      {
        title: "Tech",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "React Native",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
    ],
    closing: "The value comes from connecting both worlds.",
  },

  fr: {
    eyebrow: "Compétences",
    title: "Quand le business rencontre la tech.",
    description:
      "Un profil hybride combinant expertise marketplace, business development et compétences concrètes en développement web.",
    groups: [
      {
        title: "Business",
        skills: [
          "Business Development",
          "Marketplaces",
          "E-commerce",
          "Marketing digital",
          "Acquisition vendeurs",
          "MEDDIC / Discovery",
        ],
      },
      {
        title: "Tech",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "React Native",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
    ],
    closing: "La valeur vient de la connexion entre ces deux univers.",
  },
};