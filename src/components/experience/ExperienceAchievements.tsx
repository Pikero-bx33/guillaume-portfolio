type ExperienceAchievementsProps = {
  title: string;
  achievements: string[];
};

export default function ExperienceAchievements({
  title,
  achievements,
}: ExperienceAchievementsProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 space-y-4">
        {achievements.map((achievement) => (
          <article
            key={achievement}
            className="rounded-xl border-l-4 border-ocean bg-surface p-5"
          >
            <p className="leading-7 text-muted">
              {achievement}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}