import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

import type { SkillsContent } from "@/types/skills";

type SkillsProps = {
  content: SkillsContent;
};

export default function Skills({ content }: SkillsProps) {
  return (
    <section
      id="skills"
      className="bg-surface px-6 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <SkillsHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <SkillsGrid groups={content.groups} />

        <p className="mt-8 text-lg font-semibold text-deep-blue">
          {content.closing}
        </p>
      </div>
    </section>
  );
}