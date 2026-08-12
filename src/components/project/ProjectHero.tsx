type ProjectHeroProps = {
  title: string;
  subtitle: string;
};

export default function ProjectHero({
  title,
  subtitle,
}: ProjectHeroProps) {
  return (
    <section className="pb-12 pt-4">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
        Case Study
      </p>

      <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-deep-blue sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
        {subtitle}
      </p>
    </section>
  );
}