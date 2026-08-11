import FeaturedProjectCard from "./FeaturedProjectCard";

import type { Project } from "@/types/project";

type FeaturedProjectsProps = {
  projects: Project[];
};

export default function FeaturedProjects({
  projects,
}: FeaturedProjectsProps) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <FeaturedProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}