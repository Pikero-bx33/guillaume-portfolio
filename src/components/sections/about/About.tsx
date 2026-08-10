import AboutHeader from "./AboutHeader";
import AboutHighlights from "./AboutHighlights";
import AboutStory from "./AboutStory";

import type { AboutContent } from "@/types/about";

type AboutProps = {
  content: AboutContent;
};

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <AboutHeader
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <AboutHighlights
          highlights={content.highlights}
        />

        <AboutStory
          paragraphs={content.paragraphs}
        />
      </div>
    </section>
  );
}