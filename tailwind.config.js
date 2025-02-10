/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Asegura que Tailwind use el modo "class" en lugar de "media"
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
