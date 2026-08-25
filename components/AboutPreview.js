import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 section-border-top">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.6fr_1fr] gap-10 md:gap-16 items-center">
        <div className="w-full max-w-xs aspect-[4/5] rounded-sm overflow-hidden border border-DEFAULT bg-surface mx-auto md:mx-0">
          {/* Replace /public/profile.jpg with your photo — same filename, this will pick it up automatically */}
          <img
            src="/profile.jpg"
            alt="Portrait of Antony Ochieng"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div>
          <p className="label-eyebrow mb-4">Who I Am</p>
          <p className="text-body text-text-muted leading-relaxed mb-6">
            I'm Antony — a software engineer based in Kenya. I build web
            applications for clients who need a working product, not just a
            prototype, and I care about getting the details right along the
            way.
          </p>
          <Link
            href="/about"
            className="text-nav uppercase text-gold hover:text-gold-light"
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}