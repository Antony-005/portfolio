import PageHeader from "@/components/PageHeader";
import { FAQ } from "@/components/InsightsFAQ";

export const metadata = {
  title: "FAQ",
  description: "Common questions about working together.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main>
      <PageHeader eyebrow="FAQ" title="Common questions." />
      <FAQ standalone />
    </main>
  );
}