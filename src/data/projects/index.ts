import type { Locale } from "@/types/locale";
import type { ProjectDetails } from "@/types/projectDetails";

import { assemblyEndgameProject } from "./assembly-endgame";
import { curioLabProject } from "./curio-lab";
import { dishcoveryProject } from "./dishcovery";
import { ecoProfsProject } from "./ecoprofs";
import { portfolioProject } from "./portfolio";
import { printForgeProject } from "./printforge";
import { tenziesProject } from "./tenzies";

export const projects: Record<
  string,
  Record<Locale, ProjectDetails>
> = {
  printforge: printForgeProject,
  ecoprofs: ecoProfsProject,
  portfolio: portfolioProject,
  tenzies: tenziesProject,
  "assembly-endgame": assemblyEndgameProject,
  "curio-lab": curioLabProject,
  dishcovery: dishcoveryProject,
};