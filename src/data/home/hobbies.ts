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
          "Patience, adaptability and learning to work with changing conditions.",
      },
      {
        title: "Scuba Diving",
        description:
          "Preparation, focus and curiosity for an environment that demands calm and precision.",
      },
      {
        title: "Sport & Fitness",
        description:
          "Consistency, discipline and the satisfaction of progressing over time.",
      },
      {
        title: "Science & Curiosity",
        description:
          "I enjoy science communication, astronomy and cosmology — especially understanding complex ideas in simple terms.",
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
          "Patience, adaptation et apprentissage dans un environnement en mouvement permanent.",
      },
      {
        title: "Plongée sous-marine",
        description:
          "Préparation, concentration et curiosité pour un environnement qui demande calme et précision.",
      },
      {
        title: "Sport & Fitness",
        description:
          "Régularité, discipline et satisfaction de progresser dans le temps.",
      },
      {
        title: "Science & Curiosité",
        description:
          "J'aime la vulgarisation scientifique, l'astronomie et la cosmologie, notamment comprendre simplement des sujets complexes.",
      },
    ],
  },
};