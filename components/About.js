const EXPERIENCE = [
  {
    period: "2026 - Present",
    role: "Software Engineer",
    org: "Independent Consulting",
    description:
      "Designing and shipping full-stack web applications for clients, from data model through deployment.",
  },
  {
    period: "2022 - 2026",
    role: "B.Sc. Computer Science / Software Engineering",
    org: "University",
    description:
      "Final project: a web-based house hunting system built on Node.js, MySQL, and a REST API layer.",
  },
];

export default function About({ standalone = false }) {
  return (
    <section
      id="about"
      className={
        standalone
          ? "pb-24 md:pb-32 px-6 md:px-10"
          : "py-24 md:py-32 px-6 md:px-10 section-border-top"
      }
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <div className="w-full max-w-xs aspect-[4/5] mb-6 rounded-sm overflow-hidden border border-DEFAULT bg-surface">
            {/* Replace /public/profile_2.jpg with your photo — same filename, this will pick it up automatically */}
            <img
              src="/profile_2.jpg"
              alt="Portrait of Antony Ochieng"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Replace /public/Antony_Ochieng_CV.pdf with your actual CV file — same filename */}
          <a
            href="/Antony_Ochieng_CV.pdf"
            download
            className="inline-flex items-center gap-2 mb-8 text-nav uppercase text-gold hover:text-gold-light"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download CV
          </a>

          {!standalone && (
            <>
              <p className="label-eyebrow mb-4">About</p>
              <h2 className="text-h2 mb-8">
                Engineering with the product in view.
              </h2>
            </>
          )}
          <p className="text-body text-text-muted leading-relaxed mb-4">
            I'm Antony Ochieng, a software engineer based in Kenya. I build
            full-stack web applications — from the data model through to a
            live, working product — and I care about getting the details
            right along the way.
          </p>
          <p className="text-body text-text-muted leading-relaxed">
            I take on a small number of client engagements at a time, so each
            one gets proper attention rather than a template applied twice.
          </p>
        </div>

        <div id="experience">
          <p className="label-eyebrow mb-4">Experience</p>
          <div className="space-y-8">
            {EXPERIENCE.map((item) => (
              <div
                key={item.role}
                className="border-l border-subtle pl-6 hover:border-gold-dim transition-colors"
              >
                <p className="text-body-sm text-gold-dim mb-1">
                  {item.period}
                </p>
                <h3 className="text-h4 font-serif mb-1">{item.role}</h3>
                <p className="text-body-sm text-text-dim mb-2">{item.org}</p>
                <p className="text-body-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}