import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f7ff",
          100: "#dcecff",
          200: "#b8d8ff",
          300: "#94c4ff",
          400: "#6faeff",
          500: "#4b99ff",
          600: "#287fff",
          700: "#1f62d6",
          800: "#1747a0",
          900: "#0f2c6b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
