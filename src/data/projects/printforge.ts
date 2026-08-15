import type { ProjectDetails } from "@/types/projectDetails";

export const printForgeProject: ProjectDetails = {
  slug: "printforge",

  title: "PrintForge",

  role: "Solo Developer",

  duration: "2026",

  status: "Completed",

  subtitle:
    "A modern marketplace showcase built with Next.js App Router.",

  overview: [
    "PrintForge was created as a learning project to master modern web development with Next.js and TypeScript.",
    "Rather than building an isolated feature, the objective was to understand how to structure a scalable application using the App Router, reusable components and a clean project architecture.",
    "The main challenge was designing a coherent architecture and learning how to organise folders, define clear component responsibilities and build a maintainable structure."
  ],

  objectives: [
    "Learn Next.js App Router.",
    "Master TypeScript in a real project.",
    "Build a scalable component architecture.",
    "Create a responsive mobile-first application.",
    "Apply professional project organisation.",
  ],

  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "App Router",
  ],

  keyFeatures: [
    "Dynamic routes with Next.js App Router.",
    "Search and category filtering.",
    "Responsive pagination.",
    "Reusable TypeScript components.",
    "Mobile-first responsive design.",
  ],

  architecture: [
    "Next.js App Router used for routing and page organisation.",
    "TypeScript used across the project to improve type safety.",
    "Reusable components separated from page-level routing logic.",
    "Content separated from presentation through dedicated data files.",
    "Mobile-first responsive layout built with Tailwind CSS.",
  ],

  challenges: [
    "Designing a scalable folder structure from the beginning instead of continuously reorganising the project.",
    "Understanding the App Router and dynamic routing in Next.js.",
    "Learning to think in reusable components rather than building page-specific code.",
    "Using TypeScript effectively to create reusable and maintainable interfaces.",
    "Keeping the project responsive while maintaining a clean architecture.",
  ],

  lessons: [
    "A clear architecture makes feature development much easier.",
    "TypeScript is most useful when types are designed as shared contracts.",
    "Small reusable components improve readability and maintainability.",
    "Separating content from presentation simplifies internationalisation.",
    "Mobile-first development helps keep responsive layouts predictable.",
  ],

  nextSteps: [
    "Add automated tests for key components and user flows.",
    "Improve accessibility and keyboard navigation.",
    "Add richer project documentation and architecture diagrams.",
    "Optimise images and overall performance.",
    "Deploy the application and add CI/CD.",
  ],

  gallery: [
    {
      src: "/images/projects/printforge/home.png",
      alt: "PrintForge homepage",
      caption: "Homepage and main navigation",
      aspect: "landscape",
    },
    {
      src: "/images/projects/printforge/about.png",
      alt: "PrintForge about page",
      caption: "Models listing with filters and pagination",
      aspect: "landscape",
    },
    {
      src: "/images/projects/printforge/mobile.png",
      alt: "PrintForge mobile view",
      caption: "Responsive mobile layout",
      aspect: "portrait",
    },
  ],

  githubUrl: "https://github.com/Pikero-bx33/guillaume-portfolio",

};