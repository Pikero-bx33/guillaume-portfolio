import type { BeyondContent } from "@/types/hobby";

import BeyondHeader from "./BeyondHeader";
import BeyondGrid from "./BeyondGrid";

type BeyondProps = {
  content: BeyondContent;
};

export default function Beyond({ content }: BeyondProps) {
  return (
    <section id="beyond" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <BeyondHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <BeyondGrid hobbies={content.hobbies} />
      </div>
    </section>
  );
}