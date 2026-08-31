type ExperienceOverviewProps = {
  title: string;
  overview: string[];
};

export default function ExperienceOverview({
  title,
  overview,
}: ExperienceOverviewProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 max-w-3xl space-y-5 lg:max-w-none">
        {overview.map((paragraph) => (
          <p
            key={paragraph}
            className="leading-7 text-muted"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}