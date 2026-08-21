import Link from "next/link";

type GithubLink = {
  label: string;
  url: string;
};

type ProjectActionsProps = {
  backLabel: string;
  githubLabel: string;
  demoLabel: string;
  backHref: string;
  githubUrl?: string;
  githubUrls?: GithubLink[];
  liveUrl?: string;
};

export default function ProjectActions({
  backLabel,
  githubLabel,
  demoLabel,
  backHref,
  githubUrl,
  githubUrls,
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
          {/* Single GitHub repository */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ocean px-5 py-3 text-sm font-semibold text-ocean transition-colors hover:bg-ocean hover:text-white"
            >
              {githubLabel}
            </a>
          )}

          {/* Multiple GitHub repositories */}
          {githubUrls?.map((github) => (
            <a
              key={github.url}
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ocean px-5 py-3 text-sm font-semibold text-ocean transition-colors hover:bg-ocean hover:text-white"
            >
              {github.label}
            </a>
          ))}

          {/* Live demo */}
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