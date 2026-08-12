import FeaturedProjectCard from "./FeaturedProjectCard";
import type { Locale } from "@/types/locale";

import type { Project } from "@/types/project";

type FeaturedProjectsProps = {
  projects: Project[];
  locale: Locale;
};

export default function FeaturedProjects({
  projects, locale
}: FeaturedProjectsProps) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <FeaturedProjectCard
          key={project.slug}
          project={project}
          locale={locale}
        />
      ))}
    </div>
  );
}