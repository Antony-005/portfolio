export const projects = [
  {
    slug: "robert-owuor-portfolio",
    title: "Personal Portfolio Website - Robert Owuor",
    role: "Client Engagement",
    summary:
      "A personal site for a senior HR leader and legal practitioner, built to give two decades of experience a single, credible home online.",
    problem:
      "Robert Owuor, Group Head of Human Resources at Basco Products Group and a legal practitioner with over two decades of experience building people systems across complex organizations — had no owned online presence to point people to. His professional record lived across LinkedIn and word of mouth, with nothing that presented his HR leadership and legal background together, on his own terms.",
    decisions: [
      {
        heading: "One site, two professional identities",
        body: "The site had to hold both his HR leadership work and his legal practice credibly, without either side reading as an afterthought, structured as distinct, clearly labeled sections rather than blended into a vague generalist profile.",
      },
      {
        heading: "Built for a senior audience",
        body: "The design stayed restrained and text-forward — the kind of site a fellow executive or legal peer takes seriously at a glance, rather than something that reads as self-promotional.",
      },
    ],
    outcome:
      "Delivered a polished personal site Robert can point clients, colleagues, and prospective employers to directly, rather than relying on a LinkedIn profile alone.",
    stack: ["Next.js", "React", "Vercel"],
  },
  {
    slug: "roy-lorrens-portfolio",
    title: "Personal Portfolio Website - Roy Lorrens Odhiambo",
    role: "Client Engagement",
    summary:
      "A personal site for a learning strategist and storyteller, built to make his work findable, not just presentable.",
    problem:
      "Roy Lorrens Odhiambo's work, translating ideas into practical training and knowledge for individuals and organizations, wasn't backed by any searchable, owned online presence. Anyone looking him up had no single place to actually find him.",
    decisions: [
      {
        heading: "Built to be found, not just built to look good",
        body: "Beyond the visual design, the site was structured with search visibility in mind, clear page titles, semantic structure, real content rather than image-only sections, so it would actually surface when someone searched for him, not just hold up once they'd already arrived.",
      },
    ],
    outcome:
      "In Roy's own words, the site has helped him build a strong online presence, he can now be searched and found.",
    stack: ["Next.js", "React", "Vercel"],
  },
  {
    slug: "pnl-app",
    title: "Client-Side Profit & Loss Application",
    role: "Client Engagement",
    summary:
      "A revenue and expense tracker that turns handwritten monthly bookkeeping into an instant profit/loss calculation.",
    problem:
      "The client was tracking revenue and expenses by hand — written records with no running picture of the business. At the end of each month, someone had to manually total everything to work out whether they'd made a profit or a loss. It worked, but it was slow, error-prone, and told them nothing until the month was already over.",
    decisions: [
      {
        heading: "Optimized for zero training time",
        body: "The interface was built around one core loop: log an entry, watch the number move. No accounting jargon, no configuration screens, no step the client had to think twice about. If a feature required an explanation, it was cut or simplified until it didn't.",
      },
      {
        heading: "Real-time P&L, not month-end math",
        body: "Instead of totaling figures manually at month close, the app calculates profit and loss continuously as entries are logged — so the client sees where they stand at any point, not just in arrears.",
      },
    ],
    outcome:
      "Manual, handwritten logging was eliminated entirely. The client no longer spends time at month-end reconciling paper records — the number is already there. The time saved compounds every single month.",
    stack: ["React", "Next.js", "Vercel"],
  },
  {
    slug: "house-hunting-system",
    title: "Web-Based House Hunting System",
    role: "University Final Project",
    summary:
      "A full-stack property discovery platform connecting tenants with verified listings.",
    problem:
      "Prospective tenants had no single, structured place to search verified rental listings — informal channels made it hard to trust what was actually available. The project set out to build a proper system: listings, search, and a backend that could hold up under real data.",
    decisions: [
      {
        heading: "Normalized MySQL schema from day one",
        body: "Rather than a flat, quick-and-dirty table structure, the data model was normalized early — listings, landlords, and tenant accounts as distinct, related entities — so the system could grow without a rewrite.",
      },
      {
        heading: "REST API as a hard boundary",
        body: "Client and server were split cleanly behind a REST API, rather than mixing server-rendered logic into the frontend — keeping the two sides independently testable and replaceable.",
      },
    ],
    outcome:
      "Delivered as a complete, working full-stack system for the final project submission — covering listings, search, and account management end to end.",
    stack: ["Node.js", "JavaScript", "MySQL", "REST APIs"],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}