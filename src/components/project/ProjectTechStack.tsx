type ProjectTechStackProps = {
  title: string;
  techStack: string[];
};

export default function ProjectTechStack({
  title,
  techStack,
}: ProjectTechStackProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {techStack.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-ocean px-4 py-2 text-sm font-medium text-white"
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}