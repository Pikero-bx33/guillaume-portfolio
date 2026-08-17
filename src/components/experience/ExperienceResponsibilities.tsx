type ExperienceResponsibilitiesProps = {
  title: string;
  responsibilities: string[];
};

export default function ExperienceResponsibilities({
  title,
  responsibilities,
}: ExperienceResponsibilitiesProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {responsibilities.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-surface px-5 py-4 leading-7 text-muted"
          >
            <span className="mr-2 font-semibold text-ocean">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}