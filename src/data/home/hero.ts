import type { Locale } from "@/types/locale";

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  cvLabel: string;
  cvUrl: string;
};

export const heroContent: Record<Locale, HeroContent> = {
  en: {
    eyebrow: "Business minded. Tech empowered.",
    title: "Business meets code.",
    description:
      "I bridge business, e-commerce and web development to turn commercial challenges into practical digital solutions.",
    primaryCta: "Discover my work",
    secondaryCta: "About me",
    cvLabel: "Download CV",
    cvUrl: "/cv/guillaume-legros-cv-en.pdf",
  },

  fr: {
    eyebrow: "Culture business. Esprit tech.",
    title: "Quand le business rencontre le code.",
    description:
      "Je combine expérience business, e-commerce et développement web pour transformer des enjeux commerciaux en solutions digitales concrètes.",
    primaryCta: "Découvrir mes projets",
    secondaryCta: "À propos",
    cvLabel: "Télécharger mon CV",
    cvUrl: "/cv/guillaume-legros-cv-fr.pdf",
  },
};