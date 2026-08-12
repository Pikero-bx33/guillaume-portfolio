type ProjectNextStepsProps = {
  nextSteps: string[];
};

export default function ProjectNextSteps({
  nextSteps,
}: ProjectNextStepsProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        If I rebuilt this project today...
      </h2>

      <ul className="mt-6 space-y-3">
        {nextSteps.map((step) => (
          <li
            key={step}
            className="rounded-xl border border-sand bg-surface px-5 py-4 leading-7 text-muted"
          >
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
}