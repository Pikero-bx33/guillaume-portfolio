import type { Locale } from "@/types/locale";
import type { AboutContent } from "@/types/about";

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    eyebrow: "About me",
    title: "Business roots. Digital mindset. Tech skills.",
    highlights: [
      { label: "Experience", value: "15+ years" },
      { label: "Business", value: "Sales & Marketplaces" },
      { label: "Digital", value: "Marketing & E-commerce" },
      { label: "Tech", value: "Full-Stack JS" },
    ],
    paragraphs: [
      "My career has grown across sales, digital marketing, e-commerce and marketplaces, giving me a broad understanding of how businesses acquire customers, sell online and grow.",
      "Along the way, I worked on email marketing, audience segmentation, landing pages, acquisition campaigns, SEO and SEA, before moving deeper into marketplace business development.",
      "Working closely with product and engineering teams made me increasingly curious about the technology behind digital products. That curiosity eventually led me to train in full-stack JavaScript development, adding hands-on technical skills to my business and digital marketing experience.",
    ],
  },

  fr: {
    eyebrow: "À propos",
    title: "Culture business. Marketing digital. Compétences tech.",
    highlights: [
      { label: "Expérience", value: "15+ ans" },
      { label: "Business", value: "Sales & Marketplaces" },
      { label: "Digital", value: "Marketing & E-commerce" },
      { label: "Tech", value: "Full-Stack JS" },
    ],
    paragraphs: [
      "Mon parcours s'est construit entre commerce, marketing digital, e-commerce et marketplaces, avec une vision assez large des leviers permettant d'acquérir des clients, vendre en ligne et développer une activité.",
      "J'ai notamment travaillé sur des campagnes emailing, la segmentation d'audiences, des landing pages, l'acquisition, le SEO et le SEA, avant de poursuivre mon parcours dans le business development marketplace.",
      "En travaillant au contact d'équipes produit et techniques, j'ai progressivement voulu comprendre ce qui se passait aussi sous le capot. Cette curiosité m'a conduit vers une formation Full-Stack JavaScript, ajoutant des compétences techniques concrètes à mon expérience business et marketing digital.",
    ],
  },
};