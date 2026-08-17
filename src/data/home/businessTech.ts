import type { Locale } from "@/types/locale";
import type { BusinessTechContent } from "@/types/businessTech";

export const businessTechContent: Record<Locale, BusinessTechContent> = {
  en: {
    eyebrow: "Business × Tech",
    title: "Connecting business needs and technology.",
    description:
      "My experience across business, digital marketing and e-commerce helps me understand commercial challenges and turn them into clear product and technical conversations.",
    steps: [
      {
        title: "Understand",
        description:
          "Identify customer needs, business objectives and pain points.",
      },
      {
        title: "Translate",
        description:
          "Turn business needs into clear product and technical requirements.",
      },
      {
        title: "Build",
        description:
          "Use my technical understanding to contribute to practical and realistic solutions.",
      },
    ],
  },

  fr: {
    eyebrow: "Business × Tech",
    title: "Connecter les besoins business et la technologie.",
    description:
      "Mon expérience en business, marketing digital et e-commerce me permet de comprendre les enjeux commerciaux et de les traduire en échanges clairs avec les équipes produit et techniques.",
    steps: [
      {
        title: "Comprendre",
        description:
          "Identifier les besoins clients, les objectifs business et les points de friction.",
      },
      {
        title: "Traduire",
        description:
          "Transformer les besoins métier en attentes produit et techniques claires.",
      },
      {
        title: "Construire",
        description:
          "M'appuyer sur ma compréhension technique pour contribuer à des solutions concrètes et réalistes.",
      },
    ],
  },
};