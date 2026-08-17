import CareerHeader from "./CareerHeader";
import CareerTimeline from "./CareerTimeline";

import type { CareerContent } from "@/types/experience";
import type { Locale } from "@/types/locale";

type CareerProps = {
  content: CareerContent;
  locale: Locale;
};

export default function Career({ content, locale }: CareerProps) {
  return (
    <section
      id="experience"
      className="scroll-mt-18 bg-background px-6 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <CareerHeader
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <CareerTimeline experiences={content.experiences} locale={locale} />
      </div>
    </section>
  );
}