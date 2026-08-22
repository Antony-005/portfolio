import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Start a project with Antony Ochieng.",
  alternates: { canonical: "/contact" },
};

const WHATSAPP_NUMBER = "254740690360";
const WHATSAPP_MESSAGE =
  "Hi Antony, I found your portfolio and I'd like to talk about a project.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Start a Project"
        title="Have an idea worth building properly?"
        description="Tell me about it below, problem, rough scope, timeline. I read every message myself."
      />

      <section className="pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-sm border border-DEFAULT bg-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <p className="text-body-sm text-text-muted">
              Currently taking on 1–2 new engagements per quarter.
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-10 px-5 py-4 rounded-sm border border-DEFAULT bg-surface hover:border-gold transition-colors"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gold shrink-0"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11a16.6 16.6 0 0 1-1.63-.6c-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
            </svg>
            <span className="text-body-sm text-text-primary">
              Prefer a quicker reply?{" "}
              <span className="text-gold">Message me on WhatsApp →</span>
            </span>
          </a>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}