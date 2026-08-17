import type { Locale } from "@/types/locale";
import type { BeyondContent } from "@/types/hobby";

export const beyondContent: Record<Locale, BeyondContent> = {
  en: {
    eyebrow: "Beyond the Screen",
    title: "Curiosity goes beyond code.",
    description:
      "A few things I enjoy when I'm away from a keyboard — staying active, exploring and learning along the way.",
    hobbies: [
      {
        title: "Surf",
        description:
          "Time in the ocean, chasing waves and enjoying the simple feeling of being in the right place at the right moment.",
        image: "/images/hobbies/surf.jpg",
        alt: "Surfing on a wave",
        objectPosition: "center 20%",
      },
      {
        title: "Scuba Diving",
        description:
          "Exploring a completely different world underwater, where curiosity and attention to detail take over.",
        image: "/images/hobbies/scuba.jpg",
        alt: "Scuba diving underwater",
        objectPosition: "center 30%",
      },
      {
        title: "Sport & Fitness",
        description:
          "Training, swimming, running or cycling — staying active is simply part of my everyday life.",
        image: "/images/hobbies/fitness.jpg",
        alt: "Fitness training",
        objectPosition: "center 5%",
      },
      {
        title: "Science & Curiosity",
        description:
          "From astronomy and cosmology to science communication, I enjoy understanding how things work and discovering new ideas.",
        image: "/images/hobbies/science.jpg",
        alt: "Astronomy and scientific curiosity",
      },
    ],
  },

  fr: {
    eyebrow: "Au-delà de l'écran",
    title: "La curiosité ne s'arrête pas au code.",
    description:
      "Quelques passions loin du clavier, entre sport, exploration et envie permanente d'apprendre.",
    hobbies: [
      {
        title: "Surf",
        description:
          "Du temps dans l'océan, à chercher les vagues et à profiter de ce sentiment simple d'être au bon endroit au bon moment.",
        image: "/images/hobbies/surf.jpg",
        alt: "Surf sur une vague",
        objectPosition: "center 20%",
      },
      {
        title: "Plongée sous-marine",
        description:
          "Explorer un univers complètement différent sous la surface, où curiosité et attention aux détails prennent le dessus.",
        image: "/images/hobbies/scuba.jpg",
        alt: "Plongée sous-marine",
        objectPosition: "center 30%",
      },
      {
        title: "Sport & Fitness",
        description:
          "Musculation, natation, running ou vélo : bouger et pratiquer du sport font simplement partie de mon quotidien.",
        image: "/images/hobbies/fitness.jpg",
        alt: "Entraînement sportif",
        objectPosition: "center 5%",
      },
      {
        title: "Science & Curiosité",
        description:
          "De l'astronomie à la cosmologie en passant par la vulgarisation scientifique, j'aime comprendre comment les choses fonctionnent et découvrir de nouvelles idées.",
        image: "/images/hobbies/science.jpg",
        alt: "Astronomie et curiosité scientifique",
      },
    ],
  },
};