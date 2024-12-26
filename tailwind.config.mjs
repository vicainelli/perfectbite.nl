/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#f9f7f3",
          100: "#f0ece4",
          200: "#e0d7c7",
          300: "#cdbda4",
          400: "#b89f7f",
          500: "#a98866",
          600: "#9c785a",
          700: "#82624c",
          800: "#6a5042",
          900: "#574237",
          950: "#2e221c",
        },
        cocoa: {
          50: "#f6f4f0",
          100: "#e9e3d8",
          200: "#d4c8b4",
          300: "#bca688",
          400: "#a88a67",
          500: "#997859",
          600: "#7c5d47",
          700: "#6a4c3e",
          800: "#5a4139",
          900: "#4f3a34",
          950: "#2c1f1c",
        },
      },
    },
  },
  plugins: [],
};
