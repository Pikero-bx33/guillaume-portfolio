import ProjectsHeader from "./ProjectsHeader";
import FeaturedProjects from "./FeaturedProjects";
import LearningProjects from "./LearningProjects";
import ComingSoonProjects from "./ComingSoonProjects";

import type { ProjectsSectionContent } from "@/types/project";
import type { Locale } from "@/types/locale";

type ProjectsProps = {
  content: ProjectsSectionContent;
  locale: Locale
};

export default function Projects({ content, locale }: ProjectsProps) {
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
    <section
      id="projects"
      className="scroll-mt-18 bg-background px-6 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <ProjectsHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <FeaturedProjects
          title={content.mainTitle}
          projects={featuredProjects}
          locale={locale}
        />

        <LearningProjects
          projects={learningProjects}
          title={content.learningTitle}
          locale={locale}
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