import type { ContactContent } from "@/types/contact";
import ContactLinks from "./ContactLinks";


type ContactProps = {
  content: ContactContent;
};

export default function Contact({
  content,
}: ContactProps) {
  return (
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-deep-blue px-6 py-12 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua">
            {content.eyebrow}
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {content.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            {content.description}
          </p>

          <ContactLinks links={content.links} />
        </div>
      </div>
    </section>
  );
}