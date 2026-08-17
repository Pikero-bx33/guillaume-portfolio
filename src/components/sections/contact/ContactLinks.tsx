import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import type { ContactLink } from "@/types/contact";

type ContactLinksProps = {
  links: ContactLink[];
};

function getContactIcon(label: string) {
  switch (label) {
    case "Email":
      return faEnvelope;
    case "LinkedIn":
      return faLinkedin;
    case "GitHub":
      return faGithub;
    default:
      return faEnvelope;
  }
}

export default function ContactLinks({
  links,
}: ContactLinksProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:gap-5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-deep-blue transition-all duration-200 hover:-translate-y-0.5 hover:bg-aqua focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-4 focus-visible:ring-offset-deep-blue"
        >
          <FontAwesomeIcon
            icon={getContactIcon(link.label)}
            className="h-4 w-4 shrink-0"
          />

          {link.label}
        </a>
      ))}
    </div>
  );
}