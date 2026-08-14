import BusinessTechHeader from "./BusinessTechHeader";
import BusinessTechSteps from "./BusinessTechSteps";

import type { BusinessTechContent } from "@/types/businessTech";

type BusinessTechProps = {
  content: BusinessTechContent;
};

export default function BusinessTech({
  content,
}: BusinessTechProps) {
  return (
    <section
      id="business-tech"
      className="bg-[#eef8f8] px-6 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <BusinessTechHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <BusinessTechSteps steps={content.steps} />
      </div>
    </section>
  );
}