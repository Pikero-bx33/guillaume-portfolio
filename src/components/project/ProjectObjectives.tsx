type ProjectObjectivesProps = {
  title: string;
  objectives: string[];
};

export default function ProjectObjectives({
  title,
  objectives,
}: ProjectObjectivesProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <ul className="mt-6 space-y-3">
        {objectives.map((objective) => (
          <li
            key={objective}
            className="rounded-xl bg-surface px-4 py-3 text-muted"
          >
            {objective}
          </li>
        ))}
      </ul>
    </section>
  );
}