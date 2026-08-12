import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Antony Ochieng Odhiambo",
  description: "Case studies in full-stack engineering and product architecture.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Selected Work"
        title="Case studies."
        description="Every project here is a real engagement, the problem going in, the decisions that mattered, and what changed for the client."
      />

      <section className="pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="card p-8 hover:border-gold-dim transition-colors block"
            >
              <p className="text-label uppercase text-gold-dim mb-3">
                {project.role}
              </p>
              <h2 className="text-h3 mb-4">{project.title}</h2>
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

          <div className="card p-8 border-dashed flex flex-col justify-center items-start">
            <p className="text-label uppercase text-gold-dim mb-3">
              In Progress
            </p>
            <h2 className="text-h3 mb-3">The Patch</h2>
            <p className="text-body-sm text-text-muted leading-relaxed">
              Case study coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}