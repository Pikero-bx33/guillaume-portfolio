import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
          Business × E-commerce × Tech
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-deep-blue sm:text-5xl lg:text-6xl">
          I bridge business, digital commerce and technology.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          15+ years of experience in e-commerce and business development,
          combined with hands-on web development skills in React, Next.js and
          TypeScript.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-ocean shadow-lg shadow-ocean/20 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            View my work
          </Link>

          <Link
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-sand px-6 py-3 text-sm font-semibold text-deep-blue transition-colors hover:border-ocean hover:text-ocean"
          >
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}