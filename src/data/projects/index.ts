import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

import { printForgeProject } from "./printforge";
import { ecoProfsProject } from "./ecoprofs";

export const projects: Record<
  string,
  Record<Locale, ProjectDetails>
> = {
  printforge: printForgeProject,
  ecoprofs: ecoProfsProject,
};