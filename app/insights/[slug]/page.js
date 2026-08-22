import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, getInsight } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getInsight(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
  };
}

export default function InsightPage({ params }) {
  const post = getInsight(params.slug);
  if (!post) notFound();

  return (
    <main>
      <div className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            className="text-nav uppercase text-text-muted hover:text-gold mb-8 inline-block"
          >
            ← All insights
          </Link>
          <p className="label-eyebrow mb-4">{post.tag}</p>
          <h1 className="text-h2">{post.title}</h1>
        </div>
      </div>

      <div className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto space-y-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-body text-text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="pt-10 border-t border-subtle">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}