import PageHeader from "@/components/PageHeader";
import About from "@/components/About";

export const metadata = {
  title: "About — Antony Ochieng Odhiambo",
  description: "Full-stack software engineer and product architect.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader eyebrow="About" title="Engineering with the business model in view." />
      <About standalone />
    </main>
  );
}