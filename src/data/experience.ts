import type { Locale } from "@/types/locale";
import type { CareerContent } from "@/types/experience";

export const experienceContent: Record<Locale, CareerContent> = {
  en: {
    eyebrow: "Career Journey",
    title: "From business to tech.",
    experiences: [
      {
        year: "2008",
        company: "Cdiscount",
        role: "Sales & Marketing",
        description:
          "Developed marketplace and e-commerce expertise.",
      },
      {
        year: "2023",
        company: "Octopia",
        role: "Business Development",
        description:
          "Helped merchants scale through marketplace solutions.",
      },
      {
        year: "2025",
        company: "Temu",
        role: "Senior Business Development",
        description:
          "Developed local seller partnerships.",
      },
      {
        year: "2026",
        company: "La Capsule",
        role: "Full-Stack JavaScript",
        description:
          "Completed an intensive MERN training program.",
      },
    ],
  },

  fr: {
    eyebrow: "Parcours",
    title: "Du business à la tech.",
    experiences: [
      {
        year: "2008",
        company: "Cdiscount",
        role: "Sales & Marketing",
        description:
          "Développement de mon expertise e-commerce et marketplace.",
      },
      {
        year: "2023",
        company: "Octopia",
        role: "Business Development",
        description:
          "Accompagnement des marchands sur les solutions marketplace.",
      },
      {
        year: "2025",
        company: "Temu",
        role: "Senior Business Development",
        description:
          "Développement des vendeurs locaux.",
      },
      {
        year: "2026",
        company: "La Capsule",
        role: "Full-Stack JavaScript",
        description:
          "Formation intensive au développement MERN.",
      },
    ],
  },
};