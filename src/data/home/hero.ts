import type { Locale } from "@/types/locale";

type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export const heroContent: Record<Locale, HeroContent> = {
  en: {
    eyebrow: "Business × E-commerce × Tech",
    title: "I bridge business, digital commerce and technology.",
    description:
      "15+ years of experience in e-commerce and business development, combined with hands-on web development skills in React, Next.js and TypeScript.",
    primaryCta: "View my work",
    secondaryCta: "About me",
  },

  fr: {
    eyebrow: "Business × E-commerce × Tech",
    title: "Je crée des ponts entre business, e-commerce et technologie.",
    description:
      "Plus de 15 ans d'expérience dans l'e-commerce et le business development, complétés aujourd'hui par des compétences concrètes en développement web avec React, Next.js et TypeScript.",
    primaryCta: "Voir mes projets",
    secondaryCta: "À propos",
  },
};