import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        text: "#ffffff",
        secondary: "#a1a1aa",
        card: "#141417",
        edge: "#24242b",
        accent: "#38bdf8"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
