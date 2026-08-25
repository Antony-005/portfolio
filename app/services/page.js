import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Services",
  description: "Consulting engagements in system design, full-stack development, and technical advisory.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    title: "System Design & Planning",
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

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Engagements built around outcomes, not hours."
        description="Each engagement starts with the business problem, not the tech stack — the architecture follows from there."
      />

      <section className="pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 border border-subtle rounded-sm divide-y divide-[rgba(184,98,47,0.10)] md:divide-y-0 md:divide-x">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-dark p-8">
              <h2 className="text-h4 font-serif text-gold mb-4">
                {service.title}
              </h2>
              <p className="text-body-sm text-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 md:px-10 text-center">
        <p className="text-body-sm text-text-muted mb-6">
          Curious how an engagement actually runs?{" "}
          <Link href="/process" className="text-gold hover:text-gold-light">
            See the process →
          </Link>
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
        >
          Discuss a Project
        </Link>
      </section>
    </main>
  );
}