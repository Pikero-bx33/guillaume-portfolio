import LearningProjectCard from "./LearningProjectCard";

import type { Project } from "@/types/project";

type LearningProjectsProps = {
  projects: Project[];
  title: string;
};

export default function LearningProjects({
  projects,
  title,
}: LearningProjectsProps) {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-deep-blue">
        {title}
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <LearningProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}