type BeyondHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function BeyondHeader({
  eyebrow,
  title,
  description,
}: BeyondHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}