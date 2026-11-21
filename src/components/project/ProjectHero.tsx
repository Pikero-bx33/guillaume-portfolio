import Image from "next/image";

type ProjectHeroProps = {
  label: string;
  title: string;
  subtitle: string;
  logo?: string;
};

export default function ProjectHero({
  label,
  title,
  subtitle,
  logo,
}: ProjectHeroProps) {
  return (
    <section className="scroll-mt-24 pb-12 pt-4">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
        {label}
      </p>

      <div className="mt-4 flex items-center gap-3">
        {logo && (
          <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
            <Image
              src={logo}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
            />
          </div>
        )}

        <h1 className="min-w-0 text-4xl font-bold leading-tight tracking-tight text-deep-blue sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted lg:max-w-none">
        {subtitle}
      </p>
    </section>
  );
}
