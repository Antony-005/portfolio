import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";

export const metadata = {
  title: "Process",
  description: "From business model to production, in four stages.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Process"
        title="From business model to production, in four stages."
        description="No two engagements look identical, but the shape of the work is consistent."
      />
      <Process standalone />
    </main>
  );
}