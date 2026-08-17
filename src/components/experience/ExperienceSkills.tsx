type ExperienceSkillsProps = {
  title: string;
  skills: string[];
};

export default function ExperienceSkills({
  title,
  skills,
}: ExperienceSkillsProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-ocean px-4 py-2 text-sm font-medium text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}