import type { Locale } from "@/types/locale";

type FooterContent = {
  tagline: string;
  backToTop: string;
};

export const footerContent: Record<Locale, FooterContent> = {
  en: {
    tagline: "Business meets code.",
    backToTop: "Back to top",
  },

  fr: {
    tagline: "Quand le business rencontre le code.",
    backToTop: "Retour en haut",
  },
};