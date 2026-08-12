import type { ProjectDetails } from "@/types/projectDetails";

export const ecoProfsProject: ProjectDetails = {
  slug: "ecoprofs",

  title: "EcoProfs",

  subtitle:
    "A mobile marketplace MVP connecting primary school teachers to exchange and reuse educational materials.",

  role: "Full-Stack Developer — Team Project",

  duration: "5 sprints",

  status: "MVP completed",

  overview: [
    "EcoProfs was developed as the final project of my Full-Stack JavaScript training at La Capsule.",
    "The objective was to build a mobile marketplace dedicated to primary school teachers, allowing them to publish, discover and exchange educational materials locally.",
    "The project was developed as a team and delivered as an MVP for a final presentation in front of a jury.",
  ],

  objectives: [
    "Build a functional mobile marketplace MVP.",
    "Implement secure authentication restricted to educational email domains.",
    "Allow teachers to publish and manage classified ads.",
    "Provide search, filtering and geolocation features.",
    "Build both the mobile frontend and the REST API.",
    "Work collaboratively using a sprint-based development process.",
  ],

  techStack: [
    "React Native",
    "Expo",
    "TypeScript",
    "Redux Toolkit",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Zod",
    "Better Auth",
    "Cloudinary",
  ],

  keyFeatures: [
    "Email/password authentication with educational domain validation.",
    "Multi-step user onboarding.",
    "Create, edit and manage marketplace ads.",
    "Camera and image upload integration.",
    "Geolocation and distance-based search.",
    "Categories and grade-level filters.",
    "Favorites management.",
    "User profile and personal ads management.",
  ],

  architecture: [
    "React Native and Expo used for the mobile application.",
    "Redux Toolkit used for shared client-side state.",
    "Express REST API used for backend services.",
    "MongoDB and Mongoose used for persistence and data modelling.",
    "GeoJSON and a 2dsphere index used for location-based searches.",
    "Zod used to validate API inputs.",
    "Better Auth used for authentication.",
    "Cloudinary used for image storage.",
  ],

  challenges: [
    "Designing authentication across a React Native frontend and Express backend.",
    "Restricting account creation to authorised educational email domains.",
    "Managing navigation between authentication, onboarding and the main application.",
    "Integrating the mobile camera and image upload workflow.",
    "Implementing geolocation and distance-based marketplace searches.",
    "Keeping frontend and backend TypeScript models consistent.",
    "Coordinating development across several team members during short sprints.",
  ],

  lessons: [
    "A mobile application introduces platform-specific constraints that differ significantly from web development.",
    "Clear API contracts are essential when frontend and backend are developed simultaneously.",
    "Authentication is not only a login screen but a complete flow involving security, navigation and user state.",
    "Breaking complex features into smaller sprint-sized tasks improves team delivery.",
    "Building an MVP requires prioritising essential user journeys over feature completeness.",
  ],

  nextSteps: [
    "Complete and stabilise the remaining unfinished features.",
    "Improve automated testing on both frontend and backend.",
    "Strengthen error handling and loading states.",
    "Improve the overall UI and accessibility.",
    "Review and simplify parts of the navigation architecture.",
    "Deploy a production-ready backend and mobile build.",
  ],

  githubUrl: "TON_URL_GITHUB_ECOPROFS",
};