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
      "I connect business needs to digital products — with 15+ years in e-commerce and a full-stack JavaScript toolkit.",
    /* description:
      "I bridge business, e-commerce and web development to turn commercial challenges into practical digital solutions.", */
    primaryCta: "Discover my work",
    secondaryCta: "About me",
    cvLabel: "Download CV",
    cvUrl: "/cv/guillaume-legros-cv-en.pdf",
  },

  fr: {
    eyebrow: "Culture business. Esprit tech.",
    title: "Du business au code.",
    description:
      "Je relie les enjeux business aux produits digitaux — avec plus de 15 ans d’expérience en e-commerce et une boîte à outils full-stack JavaScript.",
    /* description:
      "Je combine expérience business, e-commerce et développement web pour transformer des enjeux commerciaux en solutions digitales concrètes.", */
    primaryCta: "Découvrir mes projets",
    secondaryCta: "À propos",
    cvLabel: "Télécharger mon CV",
    cvUrl: "/cv/guillaume-legros-cv-fr.pdf",
  },
};