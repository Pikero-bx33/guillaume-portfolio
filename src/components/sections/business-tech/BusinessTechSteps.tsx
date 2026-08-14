import type { BusinessTechStep } from "@/types/businessTech";

type BusinessTechStepsProps = {
  steps: BusinessTechStep[];
};

export default function BusinessTechSteps({
  steps,
}: BusinessTechStepsProps) {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title}>
          <article className="h-full rounded-2xl border border-sand bg-surface p-6">
            <p className="text-sm font-semibold text-ocean">
              0{index + 1}
            </p>

            <h3 className="mt-2 text-xl font-bold text-deep-blue">
              {step.title}
            </h3>

            <p className="mt-3 leading-7 text-muted">
              {step.description}
            </p>
          </article>

          {index < steps.length - 1 && (
            <div className="py-2 text-center text-xl text-ocean lg:hidden">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  );
}