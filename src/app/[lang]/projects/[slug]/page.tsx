import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import { projectUi } from "@/data/projects/ui";
import type { Locale } from "@/types/locale";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectObjectives from "@/components/project/ProjectObjectives";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectArchitecture from "@/components/project/ProjectArchitecture";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectLessons from "@/components/project/ProjectLessons";
import ProjectNextSteps from "@/components/project/ProjectNextSteps";
import ProjectMeta from "@/components/project/ProjectMeta";
import ProjectKeyFeatures from "@/components/project/ProjectKeyFeatures";
import ProjectActions from "@/components/project/ProjectActions";


type ProjectPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { lang, slug } = await params;

  const locale = lang as Locale;
  const labels = projectUi[locale];

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <ProjectHero
        label={labels.caseStudy}
        title={project.title}
        subtitle={project.subtitle}
      />

      <ProjectMeta
        roleLabel={labels.role}
        durationLabel={labels.duration}
        statusLabel={labels.status}
        role={project.role}
        duration={project.duration}
        status={project.status}
      />

      <ProjectOverview
        title={labels.overview}
        overview={project.overview}
      />

      <ProjectObjectives
        title={labels.objectives}
        objectives={project.objectives}
      />

      <ProjectTechStack
        title={labels.techStack}
        techStack={project.techStack}
      />

      <ProjectKeyFeatures
        title={labels.keyFeatures}
        features={project.keyFeatures}
      />

      <ProjectArchitecture
        title={labels.architecture}
        architecture={project.architecture}
      />

      <ProjectChallenges
        title={labels.challenges}
        challenges={project.challenges}
      />

      <ProjectLessons
        title={labels.lessons}
        lessons={project.lessons}
      />

      <ProjectNextSteps
        title={labels.nextSteps}
        nextSteps={project.nextSteps}
      />

      <ProjectActions
        backLabel={labels.back}
        githubLabel={labels.github}
        demoLabel={labels.demo}
        backHref={`/${locale}#projects`}
        githubUrl={project.githubUrl}
        liveUrl={project.liveUrl}
      />
    </main>
  );
}