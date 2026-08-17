import Link from "next/link";

type ExperienceActionsProps = {
  backLabel: string;
  backHref: string;
};

export default function ExperienceActions({
  backLabel,
  backHref,
}: ExperienceActionsProps) {
  return (
    <section className="border-t border-sand py-12">
      <Link
        href={backHref}
        className="inline-flex items-center font-semibold text-deep-blue transition-colors hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4"
      >
        ← {backLabel}
      </Link>
    </section>
  );
}