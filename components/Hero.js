export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 md:pt-48 md:pb-36 px-6 md:px-10 overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <img
          src="/profile_1.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark/55" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <p className="text-label uppercase text-gold mb-6">Software Engineer</p>

        <h1 className="text-h1 max-w-3xl text-white">
          Building complete web products{" "}
          <span className="text-gold">from idea to launch.</span>
        </h1>

        <p className="text-body max-w-xl mt-8 leading-relaxed text-white/85">
          I'm Antony Ochieng, I design and build web applications end to
          end, from the data model through to a live, working product.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#work"
            className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
          >
            View Case Studies
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 rounded-sm border border-white/40 text-white text-cta uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}