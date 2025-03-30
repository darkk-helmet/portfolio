import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      button: "0 0 16px 8px rgba(0, 0, 0, 0.15)",
      lg: "0 4px 16px 8px rgba(0, 0, 0, 0.15)",
      xl: "0 4px 24px 8px rgba(0, 0, 0, 0.15)",
      "2xl": "0 4px 32px 8px rgba(0, 0, 0, 0.15)",
    },
    fontSize: {
      xs: [".0.694rem", {
        lineHeight: "1.8",
        letterSpacing: "0em",
        fontWeight: '500',
      }],
      sm: ["0.833rem", {
        lineHeight: "1.8",
        letterSpacing: "0em",
        fontWeight: '500',
      }],
      base: ["1rem", {
        lineHeight: "1.8",
        letterSpacing: "0em",
        fontWeight: '500',
      }],
      lg: ["1.2rem", {
        lineHeight: "1.15",
        letterSpacing: "-0.022em",
        fontWeight: '700',
      }],
      xl: ["1.44rem", {
        lineHeight: "1.15",
        letterSpacing: "-0.022em",
        fontWeight: '700',
      }],
      "2xl": ["1.728rem", {
        lineHeight: "1.15",
        letterSpacing: "-0.022em",
        fontWeight: '700',
      }],
      "3xl": ["2.074rem", {
        lineHeight: "1.35",
        letterSpacing: "-0.022em",
        fontWeight: '700',
      }],
      "4xl": ["2.488rem", {
        lineHeight: "1.15",
        letterSpacing: "-0.022em",
        fontWeight: '700',
      }],
      "5xl": ["2.986rem", {
        lineHeight: "1.15",
        letterSpacing: "-0.022em",
        fontWeight: '700',
      }],
    },
    extend: {
      colors: {
        background: "var(--background)",
        "background-50": "var(--background-50)",
        foreground: "var(--foreground)",
        lavender: {
          50: "#f6f2fa",
          100: "#e4d8ef",
          200: "#d2bee5",
          300: "#c0a4db",
          400: "#a57dcb",
          500: "#8464a2",
          600: "#73588e",
          700: "#634b7a",
          800: "#533f66",
          900: "#423251",
          950: "#211929",
        },
        magenta: {
          50: "#fbf2f9",
          100: "#f6e5f2",
          200: "#edcbe6",
          300: "#e5b0d9",
          400: "#dc96cd",
          500: "#d37cc0",
          600: "#a9639a",
          700: "#945786",
          800: "#7f4a73",
          900: "#54324d",
          950: "#3f253a",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
