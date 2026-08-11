import type { Project } from "@/types/project";

type ComingSoonProjectsProps = {
  projects: Project[];
  title: string;
  inProgressLabel: string;
};

export default function ComingSoonProjects({
  projects,
  title,
  inProgressLabel,
}: ComingSoonProjectsProps) {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-deep-blue">
        {title}
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-dashed border-sand bg-surface p-5"
          >
            <p className="text-sm font-semibold text-ocean">
              {inProgressLabel}
            </p>

            <h4 className="mt-2 text-lg font-bold text-deep-blue">
              {project.title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-muted">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}