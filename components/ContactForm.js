"use client";

import { useState } from "react";

const BUDGET_RANGES = {
  KES: ["Under KES 30,000", "KES 30,000 – 80,000", "KES 80,000 – 200,000", "KES 200,000+"],
  USD: ["Under $250", "$250 – $650", "$650 – $1,500", "$1,500+"],
  EUR: ["Under €230", "€230 – €600", "€600 – €1,400", "€1,400+"],
};

const initialState = {
  name: "",
  email: "",
  projectType: "Full-stack web application",
  currency: "KES",
  budget: BUDGET_RANGES.KES[1],
  timeline: "1-3 months",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function updateCurrency(e) {
    const nextCurrency = e.target.value;
    setForm((f) => ({
      ...f,
      currency: nextCurrency,
      budget:
        BUDGET_RANGES[nextCurrency][
          BUDGET_RANGES[f.currency].indexOf(f.budget)
        ] || BUDGET_RANGES[nextCurrency][0],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-8 text-center">
        <p className="text-h4 font-serif text-gold mb-2">Message sent.</p>
        <p className="text-body-sm text-text-muted">
          Thanks for reaching out — I'll get back to you within a couple of
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-body-sm text-text-muted block mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            className="w-full bg-surface border border-DEFAULT rounded-sm px-4 py-3 text-body-sm text-text-primary focus:border-gold outline-none"
          />
        </div>
        <div>
          <label className="text-body-sm text-text-muted block mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="w-full bg-surface border border-DEFAULT rounded-sm px-4 py-3 text-body-sm text-text-primary focus:border-gold outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-body-sm text-text-muted block mb-2" htmlFor="projectType">
          Project type
        </label>
        <select
          id="projectType"
          value={form.projectType}
          onChange={update("projectType")}
          className="w-full bg-surface border border-DEFAULT rounded-sm px-4 py-3 text-body-sm text-text-primary focus:border-gold outline-none"
        >
          <option>Full-stack web application</option>
          <option>System design &amp; planning</option>
          <option>Technical audit</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="grid md:grid-cols-[auto_1fr_1fr] gap-6 items-end">
        <div>
          <label className="text-body-sm text-text-muted block mb-2" htmlFor="currency">
            Currency
          </label>
          <select
            id="currency"
            value={form.currency}
            onChange={updateCurrency}
            className="w-full bg-surface border border-DEFAULT rounded-sm px-4 py-3 text-body-sm text-text-primary focus:border-gold outline-none"
          >
            <option value="KES">KES</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div>
          <label className="text-body-sm text-text-muted block mb-2" htmlFor="budget">
            Budget range
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={update("budget")}
            className="w-full bg-surface border border-DEFAULT rounded-sm px-4 py-3 text-body-sm text-text-primary focus:border-gold outline-none"
          >
            {BUDGET_RANGES[form.currency].map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-body-sm text-text-muted block mb-2" htmlFor="timeline">
            Timeline
          </label>
          <select
            id="timeline"
            value={form.timeline}
            onChange={update("timeline")}
            className="w-full bg-surface border border-DEFAULT rounded-sm px-4 py-3 text-body-sm text-text-primary focus:border-gold outline-none"
          >
            <option>ASAP</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-body-sm text-text-muted block mb-2" htmlFor="message">
          Tell me about the project
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="w-full bg-surface border border-DEFAULT rounded-sm px-4 py-3 text-body-sm text-text-primary focus:border-gold outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center px-7 py-3.5 rounded-sm bg-gold text-dark text-cta uppercase font-medium hover:bg-gold-light transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-body-sm text-red-500">
          Something went wrong — try again, or email directly.
        </p>
      )}
    </form>
  );
}