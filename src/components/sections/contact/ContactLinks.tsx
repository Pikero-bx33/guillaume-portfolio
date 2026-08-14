import type { ContactLink } from "@/types/contact";

type ContactLinksProps = {
  links: ContactLink[];
};

export default function ContactLinks({
  links,
}: ContactLinksProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-deep-blue transition-opacity hover:opacity-90"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}