import type { ProjectDetails } from "@/types/projectDetails";

import { printForgeProject } from "./printforge";
import { ecoProfsProject } from "./ecoprofs";

export const projects: Record<string, ProjectDetails> = {
  printforge: printForgeProject,
  ecoprofs: ecoProfsProject,
};