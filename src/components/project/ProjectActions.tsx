import Link from "next/link";

type ProjectActionsProps = {
  backLabel: string;
  githubLabel: string;
  demoLabel: string;
  backHref: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectActions({
  backLabel,
  githubLabel,
  demoLabel,
  backHref,
  githubUrl,
  liveUrl,
}: ProjectActionsProps) {
  return (
    <section className="border-t border-sand py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={backHref}
          className="font-semibold text-deep-blue transition-colors hover:text-ocean"
        >
          ← {backLabel}
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-sand px-5 py-3 text-sm font-semibold text-deep-blue transition-colors hover:border-ocean hover:text-ocean"
            >
              {githubLabel}
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {demoLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}