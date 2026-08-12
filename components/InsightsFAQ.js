const FAQS = [
  {
    q: "What's the typical engagement length?",
    a: "Most projects run 4–10 weeks depending on scope, from architecture through deployment.",
  },
  {
    q: "Do you work with early-stage founders?",
    a: "Yes, often the highest-leverage work is getting the architecture right before the first version ships.",
  },
  {
    q: "What stack do you default to?",
    a: "React/Next.js on the front end, Node.js on the back end, with the database chosen to fit the data, not the other way around.",
  },
];

export function FAQ({ standalone = false }) {
  return (
    <section
      id="faq"
      className={
        standalone
          ? "pb-24 md:pb-32 px-6 md:px-10"
          : "py-24 md:py-32 px-6 md:px-10 section-border-top"
      }
    >
      <div className="max-w-3xl mx-auto">
        {!standalone && (
          <>
            <p className="label-eyebrow mb-4">FAQ</p>
            <h2 className="text-h2 mb-16">Common questions.</h2>
          </>
        )}

        <div className="divide-y divide-[rgba(184,98,47,0.10)] border-t border-b border-subtle">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none text-h4 font-serif">
                {item.q}
                <span className="text-gold text-xl leading-none ml-4 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-body-sm text-text-muted leading-relaxed mt-4 max-w-2xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}