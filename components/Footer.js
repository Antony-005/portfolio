import Link from "next/link";

// LinkedIn intentionally omitted for now — account is pending reinstatement.
// Add back once restored: { label: "LinkedIn", href: "https://linkedin.com/in/YOUR-HANDLE" }
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Antony-005" },
  { label: "X", href: "https://x.com/AntonyO27832226" },
  { label: "Instagram", href: "https://www.instagram.com/ant.ony056/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 md:px-10 section-border-top">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-6 mb-16">
          <p className="label-eyebrow">Start a Project</p>
          <h2 className="text-h2 max-w-xl">
            Have an idea worth building properly?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Start a Project
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-10 border-t border-subtle">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-11 h-11 rounded-sm bg-surface border border-DEFAULT text-gold font-serif text-lg">
              AO
            </span>
            <p className="text-body-sm text-text-dim">
              Antony Ochieng
              <br />
              Software Engineer
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nav uppercase text-text-dim hover:text-gold"
              >
                {social.label}
              </a>
            ))}
          </nav>

          <p className="text-body-sm text-text-dim">
            &copy; {year} Antony Ochieng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}