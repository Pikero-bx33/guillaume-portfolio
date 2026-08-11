import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

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
      <h1 className="text-4xl font-bold text-deep-blue">
        {project.title}
      </h1>

      <p className="mt-4 text-lg text-muted">
        {project.subtitle}
      </p>
    </main>
  );
}