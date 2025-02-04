import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#121212",
        gunmetal: "#2A2A2A",
        midtone: "#4A4A3A",
        cyberGold: "#FFD700",
        neonBlue: "#00AEEF",
        steelBlue: "#005F73",
        emberOrange: "#FF8C00",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
export default config;
