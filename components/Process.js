const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Map the business model, the users, and the constraints that actually matter before any architecture gets proposed.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Define the data model, API boundaries, and stack, with the trade-offs written down, not implied.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Ship in reviewable increments. Working software in front of you early, not a single reveal at the end.",
  },
  {
    number: "04",
    title: "Deploy & Hand Off",
    description:
      "Production deployment, documentation, and a codebase the next engineer can actually read.",
  },
];

export default function Process({ standalone = false }) {
  return (
    <section
      id="process"
      className={
        standalone
          ? "pb-24 md:pb-32 px-6 md:px-10"
          : "py-24 md:py-32 px-6 md:px-10 section-border-top"
      }
    >
      <div className="max-w-6xl mx-auto">
        {!standalone && (
          <>
            <p className="label-eyebrow mb-4">Process</p>
            <h2 className="text-h2 max-w-2xl mb-16">
              From business model to production, in four stages.
            </h2>
          </>
        )}

        <div className="grid md:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.number}>
              <p className="text-h3 font-serif text-gold-dim mb-4">
                {step.number}
              </p>
              <h3 className="text-h4 font-serif mb-3">{step.title}</h3>
              <p className="text-body-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}