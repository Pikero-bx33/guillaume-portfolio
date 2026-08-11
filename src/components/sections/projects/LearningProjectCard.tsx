import type { Project } from "@/types/project";

type LearningProjectCardProps = {
  project: Project;
};

export default function LearningProjectCard({
  project,
}: LearningProjectCardProps) {
  return (
    <article className="rounded-2xl border border-sand bg-surface p-5">
      <h3 className="text-lg font-bold text-deep-blue">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-background px-3 py-1.5 text-xs font-medium text-muted"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}