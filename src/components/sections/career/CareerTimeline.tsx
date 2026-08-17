import CareerItem from "./CareerItem";

import type { Experience } from "@/types/experience";
import type { Locale } from "@/types/locale";

type CareerTimelineProps = {
  experiences: Experience[];
  locale: Locale;
};

export default function CareerTimeline({
  experiences,
  locale,
}: CareerTimelineProps) {
  return (
    <div className="mt-10 lg:grid lg:grid-cols-4 lg:gap-6">
      {experiences.map((experience, index) => (
        <CareerItem
          key={`${experience.company}-${experience.year}`}
          experience={experience}
          isLast={index === experiences.length - 1}
          locale={locale}
        />
      ))}
    </div>
  );
}