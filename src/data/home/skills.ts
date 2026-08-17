import type { Locale } from "@/types/locale";
import type { SkillsContent } from "@/types/skills";

export const skillsContent: Record<Locale, SkillsContent> = {
  en: {
    eyebrow: "Skills",
    title: "Business meets technology.",
    description:
      "A hybrid profile combining business development, digital marketing, e-commerce and hands-on web development skills.",
    groups: [
      {
        title: "Business & E-commerce",
        skills: [
          "Business Development",
          "Marketplaces",
          "Seller Acquisition",
          "B2B Sales",
          "MEDDIC / Discovery",
          "Account Development",
        ],
      },
      {
        title: "Digital Marketing",
        skills: [
          "Campaign Planning & Performance",
          "Email Marketing",
          "Audience Segmentation",
          "Landing Pages",
          "Customer Acquisition",
          "Trade-marketing",
          "SEO",
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
    closing:
      "The value comes from connecting business, digital marketing and technology.",
  },

  fr: {
    eyebrow: "Compétences",
    title: "Quand le business rencontre la tech.",
    description:
      "Un profil hybride combinant business development, marketing digital, e-commerce et compétences concrètes en développement web.",
    groups: [
      {
        title: "Business & E-commerce",
        skills: [
          "Business Development",
          "Marketplaces",
          "Acquisition vendeurs",
          "Vente B2B",
          "MEDDIC / Discovery",
          "Développement clients",
        ],
      },
      {
        title: "Marketing Digital",
        skills: [
          "Pilotage de campagnes",
          "Email Marketing",
          "Segmentation",
          "Landing Pages",
          "Acquisition",
          "Trade-marketing",
          "SEO",
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
    closing:
      "La valeur vient de la connexion entre business, marketing digital et technologie.",
  },
};