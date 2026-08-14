import CareerHeader from "./CareerHeader";
import CareerTimeline from "./CareerTimeline";

import type { CareerContent } from "@/types/experience";

type CareerProps = {
  content: CareerContent;
};

export default function Career({ content }: CareerProps) {
  return (
    <section
      id="experience"
      className="bg-background px-6 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <CareerHeader
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <CareerTimeline experiences={content.experiences} />
      </div>
    </section>
  );
}