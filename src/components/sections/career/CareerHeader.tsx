type CareerHeaderProps = {
  eyebrow: string;
  title: string;
};

export default function CareerHeader({
  eyebrow,
  title,
}: CareerHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}