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
    <article className="relative pl-8 pb-10">
      {!isLast && (
        <div className="absolute left-[7px] top-4 h-full w-px bg-sand" />
      )}

      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-ocean" />

      <p className="text-sm font-semibold text-ocean">
        {experience.year}
      </p>

      <h3 className="mt-1 text-xl font-bold text-deep-blue">
        {experience.company}
      </h3>

      <p className="mt-1 font-medium text-foreground">
        {experience.role}
      </p>

      <p className="mt-3 max-w-xl leading-7 text-muted">
        {experience.description}
      </p>
    </article>
  );
}