import ProjectsHeader from "./ProjectsHeader";
import FeaturedProjects from "./FeaturedProjects";
import LearningProjects from "./LearningProjects";
import ComingSoonProjects from "./ComingSoonProjects";

import type { ProjectsSectionContent } from "@/types/project";

type ProjectsProps = {
  content: ProjectsSectionContent;
};

export default function Projects({ content }: ProjectsProps) {
  const featuredProjects = content.projects.filter(
    (project) => project.status === "featured"
  );

  const learningProjects = content.projects.filter(
    (project) => project.status === "learning"
  );

  const comingSoonProjects = content.projects.filter(
    (project) => project.status === "coming-soon"
  );

  return (
    <section id="projects" className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <ProjectsHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <FeaturedProjects projects={featuredProjects} />

        <LearningProjects
          projects={learningProjects}
          title={content.learningTitle}
        />

        <ComingSoonProjects
          projects={comingSoonProjects}
          title={content.comingSoonTitle}
          inProgressLabel={content.inProgressLabel}
        />
      </div>
    </section>
  );
}