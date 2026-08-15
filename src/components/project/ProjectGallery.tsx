import Image from "next/image";

import type { ProjectImage } from "@/types/projectDetails";

type ProjectGalleryProps = {
  title: string;
  images: ProjectImage[];
};

export default function ProjectGallery({
  title,
  images,
}: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-sand bg-surface p-3"
          >
            <div
              className={
                image.aspect === "portrait"
                  ? "relative mx-auto aspect-[9/16] w-full max-w-[280px]"
                  : "relative aspect-[16/10] w-full"
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes={
                  image.aspect === "portrait"
                    ? "280px"
                    : "(max-width: 768px) 100vw, 50vw"
                }
              />
            </div>

            {image.caption && (
              <figcaption className="px-4 py-3 text-sm text-muted">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}