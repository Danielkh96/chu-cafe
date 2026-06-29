import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1b1713",
        crema: "#f6efe4",
        oat: "#d7bea0",
        roast: "#7a4a26",
        copper: "#b56b34",
        sage: "#7d8b72"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(27, 23, 19, 0.14)",
        card: "0 16px 50px rgba(122, 74, 38, 0.14)"
      }
    },
  },
  plugins: [],
};
export default config;
