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
      "I help businesses grow by connecting strategy, digital commerce and technology to build impactful solutions.",
    primaryCta: "Discover my work",
    secondaryCta: "About me",
    cvLabel: "Download CV",
    cvUrl: "/cv/guillaume-legros-cv-en.pdf",
  },

  fr: {
    eyebrow: "Culture business. Esprit tech.",
    title: "Quand le business rencontre le code.",
    description:
      "J'aide les entreprises à connecter stratégie, commerce digital et technologie pour construire des solutions à impact.",
    primaryCta: "Découvrir mes projets",
    secondaryCta: "À propos",
    cvLabel: "Télécharger mon CV",
    cvUrl: "/cv/guillaume-legros-cv-fr.pdf",
  },
};