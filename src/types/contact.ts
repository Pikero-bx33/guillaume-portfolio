export type ContactLink = {
  label: string;
  href: string;
  external: boolean;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  links: ContactLink[];
};