type ProjectsHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function ProjectsHeader({
  eyebrow,
  title,
  description,
}: ProjectsHeaderProps) {
  return (
    <div className="max-w-3xl lg:max-w-none">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}