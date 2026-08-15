type AboutHeaderProps = {
  eyebrow: string;
  title: string;
};

export default function AboutHeader({
  eyebrow,
  title,
}: AboutHeaderProps) {
  return (
    <div className="max-w-3xl md:max-w-none">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}