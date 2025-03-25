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
          DEFAULT: "#4CD964",
          50: "#EBFBED",
          100: "#D7F7DB",
          200: "#B0EFB7",
          300: "#89E793",
          400: "#62DF6F",
          500: "#4CD964",
          600: "#28D144",
          700: "#1FA434",
          800: "#177725",
          900: "#0F4A17",
        },
        mint: {
          light: "#8FD14F",
          DEFAULT: "#4CD964",
          dark: "#1FA434",
        }
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
