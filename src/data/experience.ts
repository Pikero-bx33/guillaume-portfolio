import type { Locale } from "@/types/locale";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const experienceContent: Record<Locale, Experience[]> = {
  en: [],
  fr: [],
};