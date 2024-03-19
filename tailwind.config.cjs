/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "heading-text": "#2E282A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  "tailwindcss/nesting": "postcss-nesting",
  daisyui: {
    themes: ["retro"],
  },
};

