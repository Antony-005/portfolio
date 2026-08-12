import Link from "next/link";
import Hero from "@/components/Hero";
import { projects } from "@/lib/projects";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <main>
      <Hero />

      <section id="work" className="py-24 md:py-32 px-6 md:px-10 section-border-top">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="label-eyebrow mb-4">Selected Work</p>
              <h2 className="text-h2 max-w-xl">
                Case studies in shipping things that hold up.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline text-nav uppercase text-gold hover:text-gold-light"
            >
              View all work →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="card p-8 hover:border-gold-dim transition-colors block"
              >
                <p className="text-label uppercase text-gold-dim mb-3">
                  {project.role}
                </p>
                <h3 className="text-h3 mb-4">{project.title}</h3>
                <p className="text-body-sm text-text-muted leading-relaxed mb-6">
                  {project.summary}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-body-sm text-text-dim border border-subtle rounded-sm px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          <Link
            href="/work"
            className="md:hidden inline-block mt-10 text-nav uppercase text-gold"
          >
            View all work →
          </Link>
        </div>
      </section>

      <Testimonial />

      <section className="py-24 md:py-32 px-6 md:px-10 section-border-top">
        <div className="max-w-6xl mx-auto text-center">
          <p className="label-eyebrow mb-4">Start a Project</p>
          <h2 className="text-h2 max-w-2xl mx-auto mb-10">
            Have an idea worth building properly?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}