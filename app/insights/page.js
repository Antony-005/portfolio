import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { insights } from "@/lib/insights";

export const metadata = {
  title: "Insights",
  description: "Notes on architecture, engineering, and building things well.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <main>
      <PageHeader eyebrow="Insights" title="Notes on building things well." />

      <section className="pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="card p-8 hover:border-gold-dim transition-colors block"
            >
              <p className="text-label uppercase text-gold-dim mb-4">
                {post.tag}
              </p>
              <h2 className="text-h4 font-serif leading-snug mb-4">
                {post.title}
              </h2>
              <p className="text-body-sm text-text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}