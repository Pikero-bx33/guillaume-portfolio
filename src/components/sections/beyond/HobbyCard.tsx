import Image from "next/image";

import type { Hobby } from "@/types/hobby";

type HobbyCardProps = {
  hobby: Hobby;
};

export default function HobbyCard({
  hobby,
}: HobbyCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-sand bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={hobby.image}
          alt={hobby.alt}
          fill
          style={{
            objectPosition: hobby.objectPosition ?? "center",
          }}
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-deep-blue">
          {hobby.title}
        </h3>

        <div className="mt-2 h-0.5 w-8 bg-ocean" />

        <p className="mt-4 leading-7 text-muted">
          {hobby.description}
        </p>
      </div>
    </article>
  );
}