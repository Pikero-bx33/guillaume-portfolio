import Link from "next/link";

import type { Project } from "@/types/project";
import type { Locale } from "@/types/locale";

type LearningProjectCardProps = {
  project: Project;
  locale: Locale;
};

export default function LearningProjectCard({
  project,
  locale,
}: LearningProjectCardProps) {
  const card = (
    <article className="h-full rounded-2xl border border-sand bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-semibold text-ocean">
        {project.year}
      </p>

      <h3 className="mt-2 text-xl font-bold text-deep-blue">
        {project.title}
      </h3>

      <p className="mt-3 leading-7 text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-background px-3 py-2 text-sm font-medium text-muted"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );

  if (!project.hasCaseStudy) {
    return card;
  }

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4"
    >
      {card}
    </Link>
  );
}