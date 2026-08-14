import Link from "next/link";
import Image from "next/image";

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
    <section className="overflow-hidden bg-background px-6 pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Content */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
            {content.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-deep-blue sm:text-5xl lg:text-6xl xl:text-7xl">
            {content.title}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-ocean" />

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-deep-blue px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {content.primaryCta}
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-ocean px-6 py-3 text-sm font-semibold text-deep-blue transition-colors hover:bg-ocean hover:text-white"
            >
              {content.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-[240px] sm:w-[280px] md:mx-0 md:w-full md:max-w-[400px] lg:max-w-[560px] xl:max-w-[620px]">
          <Image
            src="/images/profile/guillaume-portrait.png"
            alt="Portrait of Guillaume Legros"
            width={1200}
            height={1200}
            priority
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}