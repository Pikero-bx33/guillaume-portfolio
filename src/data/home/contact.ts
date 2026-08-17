import type { Locale } from "@/types/locale";
import type { ContactContent } from "@/types/contact";


export const contactContent: Record<Locale, ContactContent> = {
  en: {
    eyebrow: "Let's Talk",
    title: "Interested in working together?",
    description:
      "Business development, digital marketing, e-commerce or web development — if my hybrid profile fits what you're looking for, let's talk.",
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
      "Business development, marketing digital, e-commerce ou développement web : si mon profil hybride correspond à ce que vous recherchez, échangeons.",
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
};