import Link from "next/link";

type HeroProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center px-6 py-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
          {content.eyebrow}
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-deep-blue sm:text-5xl lg:text-6xl">
          {content.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {content.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ocean/20 transition-opacity hover:opacity-90"
          >
            {content.primaryCta}
          </Link>

          <Link
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-sand px-6 py-3 text-sm font-semibold text-deep-blue transition-colors hover:border-ocean hover:text-ocean"
          >
            {content.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}