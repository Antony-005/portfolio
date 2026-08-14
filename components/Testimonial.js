const TESTIMONIALS = [
  {
    quote:
      "The portfolio website has helped me build a strong online presence given the fact that now I can be searched and found.",
    name: "Roy Lorrens Odhiambo",
    role: "Learning Strategist & Storyteller",
  },
  {
    quote:
      "Working with Antony was a great experience. He developed a P&L system for my business that made it much easier to track revenue, expenses, and overall profitability. The system is well-structured, user-friendly, and tailored to the needs of the business.",
    name: "Eugene",
    role: "Business man",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 section-border-top">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="card p-10 text-center flex flex-col">
            <p className="text-h4 font-serif leading-snug mb-8 flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-body-sm text-text-dim">
              {t.name}, {t.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}