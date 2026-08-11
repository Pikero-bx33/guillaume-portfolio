import type { ProjectDetails } from "@/types/projectDetails";

import { printForgeProject } from "./printforge";

export const projects: Record<string, ProjectDetails> = {
  printforge: printForgeProject,
};