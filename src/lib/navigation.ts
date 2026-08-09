import type { Locale } from "@/types/locale";
import type { NavItem } from "@/types/navigation";

export const navigation: Record<Locale, NavItem[]> = {
  en: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Beyond", href: "#beyond" },
    { label: "Contact", href: "#contact" },
  ],

  fr: [
    { label: "À propos", href: "#about" },
    { label: "Parcours", href: "#experience" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Passions", href: "#beyond" },
    { label: "Contact", href: "#contact" },
  ],
};