import type { Hobby } from "@/types/hobby";

type HobbyCardProps = {
  hobby: Hobby;
};

export default function HobbyCard({
  hobby,
}: HobbyCardProps) {
  return (
    <article className="rounded-2xl border border-sand bg-surface p-6">
      <h3 className="text-xl font-bold text-deep-blue">
        {hobby.title}
      </h3>

      <p className="mt-3 leading-7 text-muted">
        {hobby.description}
      </p>
    </article>
  );
}