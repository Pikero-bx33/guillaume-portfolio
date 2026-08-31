import Image from "next/image";

type ExperienceHeroProps = {
  label: string;
  company: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  logo: string;
  logoAlt: string;
};

export default function ExperienceHero({
  label,
  company,
  title,
  subtitle,
  period,
  location,
  logo,
  logoAlt
}: ExperienceHeroProps) {
  return (
    <section className="pb-12 pt-4">
      <div className="mb-6 flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0">
          <Image
            src={logo}
            alt={logoAlt}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
            {label}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-deep-blue sm:text-5xl lg:text-6xl">
            {company}
          </h1>
        </div>
      </div>

      <p className="mt-3 text-xl font-semibold text-foreground">
        {title}
      </p>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted lg:max-w-none">
        {subtitle}
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-muted">
        <span className="rounded-full bg-surface px-4 py-2">
          {period}
        </span>

        <span className="rounded-full bg-surface px-4 py-2">
          {location}
        </span>
      </div>
    </section>
  );
}