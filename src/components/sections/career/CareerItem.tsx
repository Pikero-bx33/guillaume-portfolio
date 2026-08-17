import Link from "next/link";

import type { Experience } from "@/types/experience";
import type { Locale } from "@/types/locale";

type CareerItemProps = {
  experience: Experience;
  isLast: boolean;
  locale: Locale;
};

export default function CareerItem({
  experience,
  isLast,
  locale,
}: CareerItemProps) {
  const learnMoreLabel =
    locale === "fr" ? "En savoir plus" : "Learn more";

  return (
    <article className="relative pb-10 pl-8 lg:pb-0 lg:pl-0 lg:pt-8">
      {!isLast && (
        <div className="absolute left-[7px] top-4 h-full w-px bg-sand lg:hidden" />
      )}

      {!isLast && (
        <div className="absolute left-4 top-[7px] hidden h-px w-[calc(100%+1.5rem)] bg-sand lg:block" />
      )}

      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-ocean lg:top-0" />

      <p className="text-sm font-semibold text-ocean">
        {experience.year}
      </p>

      <h3 className="mt-1 text-xl font-bold text-deep-blue">
        {experience.company}
      </h3>

      <p className="mt-1 font-medium text-foreground">
        {experience.role}
      </p>

      <p className="mt-3 leading-7 text-muted">
        {experience.description}
      </p>

      <Link
        href={`/${locale}/experience/${experience.slug}`}
        className="mt-4 inline-flex items-center text-sm font-semibold text-ocean transition-colors hover:text-deep-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4"
      >
        {learnMoreLabel}
        <span className="ml-1">→</span>
      </Link>
    </article>
  );
}