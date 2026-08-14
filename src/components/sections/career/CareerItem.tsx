import type { Experience } from "@/types/experience";

type CareerItemProps = {
  experience: Experience;
  isLast: boolean;
};

export default function CareerItem({
  experience,
  isLast,
}: CareerItemProps) {
  return (
    <article className="relative pb-10 pl-8 lg:pb-0 lg:pl-0 lg:pt-8">
      {/* Ligne mobile */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 h-full w-px bg-sand lg:hidden" />
      )}

      {/* Ligne desktop */}
      {!isLast && (
        <div className="absolute left-4 top-[7px] hidden h-px w-[calc(100%+1.5rem)] bg-sand lg:block" />
      )}

      {/* Point timeline */}
      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-ocean lg:left-0 lg:top-0" />

      <p className="text-sm font-semibold text-ocean">
        {experience.year}
      </p>

      <h3 className="mt-1 text-xl font-bold text-deep-blue">
        {experience.company}
      </h3>

      <p className="mt-1 font-medium text-foreground">
        {experience.role}
      </p>

      <p className="mt-3 leading-7 text-muted">
        {experience.description}
      </p>
    </article>
  );
}