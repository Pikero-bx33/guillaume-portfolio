import type { Project } from "@/types/project";

type FeaturedProjectCardProps = {
  project: Project;
};

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <article className="rounded-2xl border border-sand bg-surface p-6">
      <p className="text-sm font-semibold text-ocean">
        {project.year}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-deep-blue">
        {project.title}
      </h3>

      <p className="mt-3 leading-7 text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-background px-3 py-2 text-sm font-medium text-muted"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}