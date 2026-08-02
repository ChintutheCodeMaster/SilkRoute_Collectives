/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0806",
        "ink-2": "#0d0a08",
        silk: "#f2eadd",
        parchment: "#efe7da",
        gold: "#c9a227",
        "gold-soft": "#e0c88c",
        "gold-warm": "#e8d5a8",
        muted: "#a08a5c",
        dust: "#7b7167",
      },
      fontFamily: {
        display: ["var(--font-display)", "'Cormorant Garamond'", "serif"],
        body: ["var(--font-body)", "Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
