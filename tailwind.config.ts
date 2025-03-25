import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00D6A3",
          50: "#E6FFF8",
          100: "#B3FFE6",
          200: "#80FFD4",
          300: "#4DFFC2",
          400: "#1AFFB0",
          500: "#00D6A3",
          600: "#00A37C",
          700: "#007055",
          800: "#003D2E",
          900: "#000A07",
        },
      },
      animation: {
        "scroll-slow": "scroll 40s linear infinite",
        "fade-in": "fade-in 0.5s ease-in",
        "fade-up": "fade-up 0.5s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
