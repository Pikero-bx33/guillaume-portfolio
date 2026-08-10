type AboutStoryProps = {
  paragraphs: string[];
};

export default function AboutStory({
  paragraphs,
}: AboutStoryProps) {
  return (
    <div className="mt-10 max-w-3xl space-y-5">
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base leading-7 text-muted sm:text-lg sm:leading-8"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}