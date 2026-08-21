import FeaturedProjectCard from "./FeaturedProjectCard";

import type { Locale } from "@/types/locale";
import type { Project } from "@/types/project";

type FeaturedProjectsProps = {
  title: string;
  projects: Project[];
  locale: Locale;
};

export default function FeaturedProjects({
  title,
  projects,
  locale,
}: FeaturedProjectsProps) {
  return (
    <div className="mt-10">
      <h3 className="mb-6 text-2xl font-bold text-deep-blue">
        {title}
      </h3>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <FeaturedProjectCard
            key={project.slug}
            project={project}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}