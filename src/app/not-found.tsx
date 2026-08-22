import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-deep-blue sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/en"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}