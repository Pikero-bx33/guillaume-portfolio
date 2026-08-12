type ProjectLessonsProps = {
  title: string;
  lessons: string[];
};

export default function ProjectLessons({
  title,
  lessons,
}: ProjectLessonsProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <ul className="mt-6 space-y-3">
        {lessons.map((lesson) => (
          <li
            key={lesson}
            className="rounded-xl bg-surface px-5 py-4 leading-7 text-muted"
          >
            {lesson}
          </li>
        ))}
      </ul>
    </section>
  );
}