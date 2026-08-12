"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/about#experience" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/85 backdrop-blur-md border-b border-subtle">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center w-11 h-11 rounded-sm bg-surface border border-DEFAULT text-gold font-serif text-lg tracking-wide"
        >
          AO
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-nav uppercase text-text-muted hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Let&rsquo;s Talk
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
          >
            <span
              className={`h-px bg-gold transition-all ${open ? "w-6 rotate-45 translate-y-[3px]" : "w-6"}`}
            />
            <span
              className={`h-px bg-gold transition-all ${open ? "w-6 -rotate-45 -translate-y-[2px]" : "w-4"}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-subtle bg-dark px-6 py-6 flex flex-col gap-5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-nav uppercase text-text-muted hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-sm bg-gold text-dark text-cta uppercase font-medium"
          >
            Let&rsquo;s Talk
          </Link>
        </nav>
      )}
    </header>
  );
}