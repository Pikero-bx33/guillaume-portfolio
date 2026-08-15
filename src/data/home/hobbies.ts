import type { Locale } from "@/types/locale";
import type { BeyondContent } from "@/types/hobby";

export const beyondContent: Record<Locale, BeyondContent> = {
  en: {
    eyebrow: "Beyond the Screen",
    title: "Curiosity goes beyond code.",
    description:
      "A few things that keep me moving, learning and looking at the world from different angles.",
    hobbies: [
      {
        title: "Surf",
        description:
          "Chasing waves is my ultimate reset. It teaches me patience, focus and adaptability.",
        image: "/images/hobbies/surf.jpg",
        alt: "Surfing on a wave",
      },
      {
        title: "Scuba Diving",
        description:
          "Exploring the underwater world brings perspective, focus and curiosity.",
        image: "/images/hobbies/scuba.jpg",
        alt: "Scuba diving underwater",
        objectPosition: "center 30%",
      },
      {
        title: "Sport & Fitness",
        description:
          "Training keeps me disciplined, consistent and focused on long-term progress.",
        image: "/images/hobbies/fitness.jpg",
        alt: "Fitness training",
        objectPosition: "center 5%",
      },
      {
        title: "Science & Curiosity",
        description:
          "I enjoy science communication, astronomy and cosmology, especially making complex ideas easier to understand.",
        image: "/images/hobbies/science.jpg",
        alt: "Astronomy and scientific curiosity",
      },
    ],
  },

  fr: {
    eyebrow: "Beyond the Screen",
    title: "La curiosité ne s'arrête pas au code.",
    description:
      "Quelques passions qui me permettent de bouger, d'apprendre et de regarder le monde sous différents angles.",
    hobbies: [
      {
        title: "Surf",
        description:
          "Le surf est mon meilleur moyen de déconnecter. Il demande patience, concentration et adaptation.",
        image: "/images/hobbies/surf.jpg",
        alt: "Surf sur une vague",
      },
      {
        title: "Plongée sous-marine",
        description:
          "Explorer le monde sous-marin apporte perspective, concentration et curiosité.",
        image: "/images/hobbies/scuba.jpg",
        alt: "Plongée sous-marine",
        objectPosition: "center 30%",
      },
      {
        title: "Sport & Fitness",
        description:
          "L'entraînement m'apporte discipline, régularité et goût de la progression.",
        image: "/images/hobbies/fitness.jpg",
        alt: "Entraînement sportif",
        objectPosition: "center 5%",
      },
      {
        title: "Science & Curiosité",
        description:
          "J'aime la vulgarisation scientifique, l'astronomie et la cosmologie, notamment comprendre simplement des sujets complexes.",
        image: "/images/hobbies/science.jpg",
        alt: "Astronomie et curiosité scientifique",
      },
    ],
  },
};