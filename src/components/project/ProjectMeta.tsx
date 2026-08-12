type ProjectMetaProps = {
  role: string;
  duration: string;
  status: string;
};

export default function ProjectMeta({
  role,
  duration,
  status,
}: ProjectMetaProps) {
  return (
    <section className="border-t border-b border-sand py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean">
            Role
          </p>

          <p className="mt-2 font-medium text-foreground">
            {role}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean">
            Duration
          </p>

          <p className="mt-2 font-medium text-foreground">
            {duration}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean">
            Status
          </p>

          <p className="mt-2 font-medium text-foreground">
            {status}
          </p>
        </div>
      </div>
    </section>
  );
}