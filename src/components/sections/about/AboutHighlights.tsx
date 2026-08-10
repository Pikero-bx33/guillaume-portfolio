import type { Highlight } from "@/types/about";

type AboutHighlightsProps = {
  highlights: Highlight[];
};

export default function AboutHighlights({
  highlights,
}: AboutHighlightsProps) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {highlights.map((highlight) => (
        <div
          key={highlight.label}
          className="rounded-2xl border border-sand bg-surface p-5"
        >
          <p className="text-lg font-bold text-deep-blue">
            {highlight.value}
          </p>

          <p className="mt-1 text-sm text-muted">
            {highlight.label}
          </p>
        </div>
      ))}
    </div>
  );
}