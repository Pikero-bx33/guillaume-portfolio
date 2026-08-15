import type { ContactLink } from "@/types/contact";

type ContactLinksProps = {
  links: ContactLink[];
};

export default function ContactLinks({
  links,
}: ContactLinksProps) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center rounded-full bg-white px-2 py-3 text-sm font-semibold text-deep-blue transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-deep-blue sm:px-6"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}