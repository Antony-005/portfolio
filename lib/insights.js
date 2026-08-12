export const insights = [
  {
    slug: "data-model-before-framework",
    title: "Choosing a data model before choosing a framework",
    tag: "Architecture",
    excerpt:
      "The framework decision is the fun one. It's also usually the wrong place to start.",
    body: [
      "Most project conversations start with a framework question — React or Vue, Next.js or Remix. It's an easy conversation to have because the answers are well documented and the trade-offs are mostly about developer experience, not the business.",
      "But the decision that actually determines whether a system survives contact with real usage is the data model. What are the entities, how do they relate, and where does the system need to enforce a rule versus just store a fact? Get that wrong and no framework choice saves you — you end up bolting workarounds onto a shape that doesn't fit the problem.",
      "On the House Hunting System project, this meant sitting down with listings, landlords, and tenant accounts as distinct, related entities before a single React component existed. It's a slower start. It also means the schema hasn't needed a rewrite since.",
      "The practical version of this: before opening a terminal, sketch what the core objects in the system are and how they relate. If you can't draw that on paper, the framework choice is premature — you're optimizing the part of the stack that's easiest to change later, while leaving the part that's hardest to change for last.",
    ],
  },
  {
    slug: "nextjs-scaling-past-mvp",
    title: "What actually breaks when a Next.js app scales past MVP",
    tag: "Engineering",
    excerpt:
      "The demo works. Then real users show up, and the cracks aren't where you expected.",
    body: [
      "A Next.js MVP is deceptively easy to get right. Static generation makes the marketing pages fast, client components make the interactive bits feel snappy, and everything demos beautifully on a fast connection with one user in the tab.",
      "The first real crack usually isn't performance — it's data-fetching patterns that quietly turned into a waterfall. A page that fetches, then fetches again based on that result, then again, adds up fast once it's real network latency instead of localhost. The fix is almost always co-locating fetches or moving them server-side, not a bigger instance.",
      "The second is caching decisions made by default rather than on purpose. Next.js caches aggressively unless told otherwise, which is great until a client asks why their dashboard is showing yesterday's numbers. Every fetch needs a deliberate answer to \"how fresh does this need to be\" — not the framework's default answer.",
      "The third is bundle size creeping up one dependency at a time. Nothing individually looks expensive; the cumulative weight is what slows first load on a real device on real mobile data, which is usually where a client's own customers actually are.",
      "None of these show up in a demo. All of them show up in the first month of real usage — which is exactly why they're worth designing for before that month starts, not after a client asks what happened.",
    ],
  },
  {
    slug: "pnl-tool-decisions",
    title: "A client-side P&L tool: decisions that mattered",
    tag: "Case Study",
    excerpt:
      "The interesting engineering decision on this project wasn't technical. It was what to leave out.",
    body: [
      "The brief was simple to state: replace handwritten revenue and expense logs with something that calculates profit and loss automatically. The hard part wasn't the calculation — that's arithmetic. It was building something the client would actually use every day without training.",
      "The temptation on a finance tool is to add structure: categories, tags, multi-currency support, export formats, permission levels. Every one of those is a legitimate feature. Almost none of them were needed for this client on day one, and every one of them would have added a decision the client had to make before they could log an entry.",
      "So the interface was built around a single loop — log an entry, watch the number move — and everything else was cut or deferred until there was a real reason to add it back. Profit and loss is calculated continuously rather than at month end, which changed the tool from a record-keeping chore into something the client could glance at any time.",
      "The result wasn't a technically impressive system. It was a system that eliminated handwritten logging entirely and gave the client their time back every single month. That's usually the actual brief, even when the stated brief is about a calculation.",
    ],
  },
];

export function getInsight(slug) {
  return insights.find((p) => p.slug === slug);
}