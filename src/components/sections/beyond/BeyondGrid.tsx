import type { Hobby } from "@/types/hobby";

import HobbyCard from "./HobbyCard";

type BeyondGridProps = {
  hobbies: Hobby[];
};

export default function BeyondGrid({
  hobbies,
}: BeyondGridProps) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {hobbies.map((hobby) => (
        <HobbyCard
          key={hobby.title}
          hobby={hobby}
        />
      ))}
    </div>
  );
}