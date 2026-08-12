type ProjectMetaProps = {
  roleLabel: string;
  durationLabel: string;
  statusLabel: string;
  role: string;
  duration: string;
  status: string;
};

export default function ProjectMeta({
  roleLabel,
  durationLabel,
  statusLabel,
  role,
  duration,
  status,
}: ProjectMetaProps) {
  return (
    <section className="border-y border-sand py-8">
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean">
            {roleLabel}
          </p>
          <p className="mt-2 font-medium text-foreground">{role}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean">
            {durationLabel}
          </p>
          <p className="mt-2 font-medium text-foreground">{duration}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean">
            {statusLabel}
          </p>
          <p className="mt-2 font-medium text-foreground">{status}</p>
        </div>
      </div>
    </section>
  );
}