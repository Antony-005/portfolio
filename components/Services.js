const SERVICES = [
  {
    title: "Product Architecture",
    description:
      "Turning an ambiguous business model into a system design that can actually be built — data model, API boundaries, and the trade-offs made explicit before a line of code is written.",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "React and Next.js front ends backed by scalable, well-tested services — built for the traffic you'll have in a year, not just the demo.",
  },
  {
    title: "Technical Advisory",
    description:
      "Fractional architecture support for teams who need a second, senior opinion on a stack decision, a migration, or a system that's starting to strain.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 section-border-top">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow mb-4">Services</p>
        <h2 className="text-h2 max-w-2xl mb-16">
          Engagements built around outcomes, not hours.
        </h2>

        <div className="grid md:grid-cols-3 border border-subtle rounded-sm divide-y divide-[rgba(184,98,47,0.10)] md:divide-y-0 md:divide-x">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-dark p-8">
              <h3 className="text-h4 font-serif text-gold mb-4">
                {service.title}
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
