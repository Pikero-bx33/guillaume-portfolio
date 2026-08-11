import SkillsCard from "./SkillsCard";

import type { SkillGroup } from "@/types/skills";

type SkillsGridProps = {
  groups: SkillGroup[];
};

export default function SkillsGrid({
  groups,
}: SkillsGridProps) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <SkillsCard key={group.title} group={group} />
      ))}
    </div>
  );
}