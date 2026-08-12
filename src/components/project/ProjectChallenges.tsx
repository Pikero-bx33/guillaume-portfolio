type ProjectChallengesProps = {
  title: string;
  challenges: string[];
};

export default function ProjectChallenges({
  title,
  challenges,
}: ProjectChallengesProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 space-y-4">
        {challenges.map((challenge) => (
          <article
            key={challenge}
            className="rounded-xl border-l-4 border-ocean bg-surface p-5"
          >
            <p className="leading-7 text-muted">
              {challenge}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}