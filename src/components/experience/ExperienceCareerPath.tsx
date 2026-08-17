import type { CareerStep } from "@/types/experienceDetails";

type ExperienceCareerPathProps = {
  title: string;
  steps: CareerStep[];
};

export default function ExperienceCareerPath({
  title,
  steps,
}: ExperienceCareerPathProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-8 space-y-8">
        {steps.map((step) => (
          <article
            key={`${step.period}-${step.role}`}
            className="relative border-l border-sand pl-8"
          >
            <div className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-ocean" />

            <p className="text-sm font-semibold text-ocean">
              {step.period}
            </p>

            <h3 className="mt-1 text-xl font-bold text-deep-blue">
              {step.role}
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-muted">
              {step.description}
            </p>

            {step.highlights && (
              <ul className="mt-4 space-y-2">
                {step.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-6 text-muted"
                  >
                    <span className="mr-2 text-ocean">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}