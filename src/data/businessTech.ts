import type { Locale } from "@/types/locale";
import type { BusinessTechContent } from "@/types/businessTech";

export const businessTechContent: Record<Locale, BusinessTechContent> = {
  en: {
    eyebrow: "Business × Tech",
    title: "Connecting needs, products and technology.",
    description:
      "My strength is understanding business challenges and translating them into clear product and technical conversations.",
    steps: [
      {
        title: "Understand",
        description:
          "Identify customer needs, business objectives and pain points.",
      },
      {
        title: "Translate",
        description:
          "Turn business expectations into clear product requirements.",
      },
      {
        title: "Build",
        description:
          "Understand the technical constraints and contribute to practical solutions.",
      },
    ],
  },

  fr: {
    eyebrow: "Business × Tech",
    title: "Connecter les besoins, le produit et la technologie.",
    description:
      "Ma force est de comprendre les enjeux business et de les traduire en échanges clairs avec les équipes produit et techniques.",
    steps: [
      {
        title: "Comprendre",
        description:
          "Identifier les besoins clients, les objectifs business et les points de friction.",
      },
      {
        title: "Traduire",
        description:
          "Transformer les attentes métier en besoins produit clairs.",
      },
      {
        title: "Construire",
        description:
          "Comprendre les contraintes techniques et contribuer à des solutions concrètes.",
      },
    ],
  },
};