import CareerItem from "./CareerItem";

import type { Experience } from "@/types/experience";

type CareerTimelineProps = {
  experiences: Experience[];
};

export default function CareerTimeline({
  experiences,
}: CareerTimelineProps) {
  return (
    <div className="mt-10">
      {experiences.map((experience, index) => (
        <CareerItem
          key={`${experience.company}-${experience.year}`}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}