type ProjectKeyFeaturesProps = {
  title: string;
  features: string[];
};

export default function ProjectKeyFeatures({
  title,
  features,
}: ProjectKeyFeaturesProps) {
  return (
    <section className="border-t border-sand py-12">
      <h2 className="text-2xl font-bold text-deep-blue">
        {title}
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-xl bg-surface px-5 py-4 text-muted"
          >
            <span className="mr-2 font-semibold text-ocean">✓</span>
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}