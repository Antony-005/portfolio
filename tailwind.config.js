/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(var(--color-bg-rgb) / <alpha-value>)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        gold: "var(--color-accent)",
        "gold-light": "var(--color-accent-light)",
        "gold-dim": "var(--color-accent-dim)",
        text: {
          primary: "var(--color-text-primary)",
          muted: "var(--color-text-muted)",
          dim: "var(--color-text-dim)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.8rem, 5.5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        h2: ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h3: ["1.4rem", { lineHeight: "1.3" }],
        h4: ["1.1rem", { lineHeight: "1.4" }],
        body: ["0.95rem", { lineHeight: "1.7" }],
        "body-sm": ["0.88rem", { lineHeight: "1.6" }],
        label: ["0.72rem", { letterSpacing: "0.25em" }],
        nav: ["0.78rem", { letterSpacing: "0.12em" }],
        cta: ["0.8rem", { letterSpacing: "0.08em" }],
      },
      borderColor: {
        DEFAULT: "var(--color-border)",
        subtle: "var(--color-border-subtle)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)",
      },
    },
  },
  plugins: [],
};