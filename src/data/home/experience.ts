import type { Locale } from "@/types/locale";
import type { CareerContent } from "@/types/experience";

export const experienceContent: Record<Locale, CareerContent> = {
  en: {
    eyebrow: "Career Journey",
    title: "Business. Digital. Tech.",
    experiences: [
      {
        year: "2010",
        company: "Cdiscount Pro",
        role: "B2B Sales & Digital Marketing",
        description:
          "Built strong experience across B2B sales, e-commerce and digital marketing.",
        slug: "cdiscount-pro",
      },
      {
        year: "2023",
        company: "Octopia",
        role: "Business Development — Dropshipping",
        description:
          "Developed merchant acquisition across France and Europe for Octopia's dropshipping solution.",
        slug: "octopia",
      },
      {
        year: "2025",
        company: "Temu",
        role: "Senior Business Development",
        description:
          "Recruited and developed local sellers for the French marketplace.",
        slug: "temu",
      },
      {
        year: "2026",
        company: "La Capsule",
        role: "Full-Stack JavaScript",
        description:
          "Added hands-on web development skills through an intensive MERN program.",
        slug: "la-capsule",
      },
    ],
  },

  fr: {
    eyebrow: "Parcours",
    title: "Business. Digital. Tech.",
    experiences: [
      {
        year: "2010",
        company: "Cdiscount Pro",
        role: "B2B Sales & Marketing Digital",
        description:
          "Développement d'une solide expérience en vente B2B, e-commerce et marketing digital.",
        slug: "cdiscount-pro",
      },
      {
        year: "2023",
        company: "Octopia",
        role: "Business Development — Dropshipping",
        description:
          "Développement de l'acquisition marchands en France et en Europe pour la solution dropshipping d'Octopia.",
        slug: "octopia",
      },
      {
        year: "2025",
        company: "Temu",
        role: "Senior Business Development",
        description:
          "Recrutement et développement de vendeurs locaux pour la marketplace française.",
        slug: "temu",
      },
      {
        year: "2026",
        company: "La Capsule",
        role: "Full-Stack JavaScript",
        description:
          "Acquisition de compétences concrètes en développement web à travers une formation intensive MERN.",
        slug: "la-capsule",
      },
    ],
  },
};