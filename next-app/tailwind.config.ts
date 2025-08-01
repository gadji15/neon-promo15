import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "var(--neon-cyan)",
          pink: "var(--neon-pink)",
          purple: "var(--neon-purple)",
        }
      },
      fontFamily: {
        oxanium: ["Oxanium", "cursive"]
      }
    },
  },
  plugins: [],
};
export default config;