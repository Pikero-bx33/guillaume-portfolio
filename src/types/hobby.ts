export type Hobby = {
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export type BeyondContent = {
  eyebrow: string;
  title: string;
  description: string;
  hobbies: Hobby[];
};