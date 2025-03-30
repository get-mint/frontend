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
        primary: {
          DEFAULT: "#00E08F",
          50: "#E6FFF6",
          100: "#B3FFE6",
          200: "#80FFD6",
          300: "#4DFFC6",
          400: "#1AFFB6",
          500: "#00E08F",
          600: "#00AD6F",
          700: "#007A4F",
          800: "#00472F",
          900: "#00140F",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          50: "#2C2C2C",
          100: "#1A1A1A",
          200: "#151515",
          300: "#111111",
          400: "#0D0D0D",
          500: "#0A0A0A",
          600: "#070707",
          700: "#050505",
          800: "#030303",
          900: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        grid: 'url("/grid.svg")',
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 6s ease-in-out infinite",
        "scroll-slow": "scroll 40s linear infinite",
        "fade-in": "fade-in 0.5s ease-in",
        "fade-up": "fade-up 0.5s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
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
};

export default config;
