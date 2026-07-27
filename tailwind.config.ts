import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      dark: "#1F2937",
      light: "#F9FAFB",
      gray: {
        400: "#9CA3AF",
        500: "#6B7280",
        800: "#1F2937",
        900: "#111827",
      },
      primary: "#6D28D9",
      accent: "#10B981",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
        mono: ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [],
};

export default config;