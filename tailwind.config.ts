import type { Config } from "tailwindcss";

// Tailwind 4 uses CSS-based configuration via @theme in globals.css
// This config file is kept minimal for compatibility with tooling
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
} satisfies Config;
