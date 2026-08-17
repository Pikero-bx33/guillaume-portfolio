import SkillsCard from "./SkillsCard";

import type { SkillGroup } from "@/types/skills";

type SkillsGridProps = {
  groups: SkillGroup[];
};

export default function SkillsGrid({
  groups,
}: SkillsGridProps) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {groups.map((group) => (
        <SkillsCard key={group.title} group={group} />
      ))}
    </div>
  );
}