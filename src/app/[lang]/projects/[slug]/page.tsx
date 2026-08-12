import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectObjectives from "@/components/project/ProjectObjectives";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectArchitecture from "@/components/project/ProjectArchitecture";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectLessons from "@/components/project/ProjectLessons";
import ProjectNextSteps from "@/components/project/ProjectNextSteps";
import ProjectMeta from "@/components/project/ProjectMeta";

type ProjectPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
      />

      <ProjectMeta
        role={project.role}
        duration={project.duration}
        status={project.status}
      />

      <ProjectOverview overview={project.overview} />

      <ProjectObjectives objectives={project.objectives} />

      <ProjectTechStack techStack={project.techStack} />

      <ProjectArchitecture architecture={project.architecture} />

      <ProjectChallenges challenges={project.challenges} />

      <ProjectLessons lessons={project.lessons} />

      <ProjectNextSteps nextSteps={project.nextSteps} />
    </main>
  );
}