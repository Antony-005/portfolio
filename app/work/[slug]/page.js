import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Antony Ochieng Odhiambo`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main>
      <div className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/work"
            className="text-nav uppercase text-text-muted hover:text-gold mb-8 inline-block"
          >
            ← All work
          </Link>
          <p className="label-eyebrow mb-4">{project.role}</p>
          <h1 className="text-h2 mb-8">{project.title}</h1>
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
        </div>
      </div>

      <div className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <h2 className="text-h4 font-serif text-gold mb-4">The problem</h2>
            <p className="text-body text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h2 className="text-h4 font-serif text-gold mb-6">
              Decisions that mattered
            </h2>
            <div className="space-y-8">
              {project.decisions.map((d) => (
                <div key={d.heading} className="border-l border-subtle pl-6">
                  <h3 className="text-h4 font-serif mb-2">{d.heading}</h3>
                  <p className="text-body-sm text-text-muted leading-relaxed">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-h4 font-serif text-gold mb-4">The outcome</h2>
            <p className="text-body text-text-muted leading-relaxed">
              {project.outcome}
            </p>
          </div>

          <div className="pt-10 border-t border-subtle">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Start a Similar Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}