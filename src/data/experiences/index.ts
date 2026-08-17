// index.ts

import type { Locale } from "@/types/locale";
import type { ExperienceDetails } from "@/types/experienceDetails";

import { cdiscountProExperience } from "./cdiscount-pro";
import { octopiaExperience } from "./octopia";
import { temuExperience } from "./temu";
import { laCapsuleExperience } from "./la-capsule";

export const experiences: Record<
  string,
  Record<Locale, ExperienceDetails>
> = {
  "cdiscount-pro": cdiscountProExperience,
  octopia: octopiaExperience,
  temu: temuExperience,
  "la-capsule": laCapsuleExperience,
};