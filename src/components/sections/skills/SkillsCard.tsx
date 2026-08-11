import type { SkillGroup } from "@/types/skills";

type SkillsCardProps = {
  group: SkillGroup;
};

export default function SkillsCard({ group }: SkillsCardProps) {
  return (
    <article className="rounded-2xl border border-sand bg-surface p-6">
      <h3 className="text-xl font-bold text-deep-blue">
        {group.title}
      </h3>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-background px-3 py-2 text-sm font-medium text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}