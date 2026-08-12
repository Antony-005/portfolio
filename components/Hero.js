const STATS = [
  { value: "12+", label: "Projects" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "8", label: "Core Technologies" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-40 pb-28 md:pt-48 md:pb-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_0.85fr] gap-12 md:gap-16 items-start">
        <div>
          <p className="label-eyebrow mb-6">Full-Stack Engineer &amp; Product Architect</p>

          <h1 className="text-h1">
            I build web platforms that carry{" "}
            <span className="text-gold">real business weight.</span>
          </h1>

          <p className="text-body text-text-muted max-w-xl mt-8 leading-relaxed">
            Antony Ochieng, designing and building scalable backend
            systems, modern React/Next.js applications, and the architecture
            decisions that let a product survive its first thousand users.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#work"
              className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
            >
              View Case Studies
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-sm border border-DEFAULT text-text-primary text-cta uppercase hover:border-gold transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="w-full max-w-sm md:max-w-none mx-auto aspect-[4/5] rounded-sm overflow-hidden border border-DEFAULT bg-surface">
            {/* Replace /public/profile.jpg with your photo — same filename, this will pick it up automatically */}
            <img
              src="/profile.jpg"
              alt="Portrait of Antony Ochieng"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-subtle">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="text-label uppercase text-text-dim mb-2">
                {stat.label}
              </dt>
              <dd className="text-h3 font-serif text-gold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}