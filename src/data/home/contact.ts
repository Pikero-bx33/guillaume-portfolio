import type { Locale } from "@/types/locale";
import type { ContactContent } from "@/types/contact";

export const contactContent: Record<Locale, ContactContent> = {
  en: {
    eyebrow: "Let's Talk",
    title: "Interested in working together?",
    description:
      "Whether it's about digital, e-commerce, business development or web development, feel free to get in touch.",
    links: [
      {
        label: "Email",
        href: "mailto:guillaume.lg79@gmail.com",
        external: false,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/guillaume-legros-93187431/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Pikero-bx33",
        external: true,
      },
    ],
  },

  fr: {
    eyebrow: "Contact",
    title: "Envie d'échanger ?",
    description:
      "Digital, e-commerce, business development ou développement web : n'hésitez pas à me contacter pour échanger.",
    links: [
      {
        label: "Email",
        href: "mailto:mailto:guillaume.lg79@gmail.com",
        external: false,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/guillaume-legros-93187431/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Pikero-bx33",
        external: true,
      },
    ],
  },
};