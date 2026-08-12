type ProjectArchitectureProps = {
  title: string;
  architecture: string[];
};

export default function ProjectArchitecture({
  title,
  architecture,
}: ProjectArchitectureProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {architecture.map((item) => (
          <article
            key={item}
            className="rounded-xl border border-sand bg-surface p-5"
          >
            <p className="leading-7 text-muted">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}