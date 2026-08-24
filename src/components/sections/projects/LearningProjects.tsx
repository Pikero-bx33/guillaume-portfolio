import type { Locale } from "@/types/locale";
import type { Project } from "@/types/project";
import LearningProjectCard from "./LearningProjectCard";

type LearningProjectsProps = {
  projects: Project[];
  title: string;
  locale: Locale;
};

export default function LearningProjects({
  projects,
  title,
  locale,
}: LearningProjectsProps) {
  return (
    <div className="mt-10">
      <h3 className="mb-6 text-xl font-bold text-deep-blue">
        {title}
      </h3>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <LearningProjectCard
            key={project.slug}
            project={project}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}