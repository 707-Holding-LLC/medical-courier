import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1e4d35",
          greenMedium: "#3d7a5a",
          mint: "#b6d4c0",
          muted: "#8fad9a",
          border: "#d8e3dc",
          soft: "#e8f0eb",
          ink: "#163828",
          bg: "#f2f5f0",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 10px 30px rgba(22, 56, 40, 0.08), 0 2px 8px rgba(22, 56, 40, 0.05)",
        hero: "0 20px 40px rgba(30, 77, 53, 0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;