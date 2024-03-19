/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "heading-text": "#2E282A",
      },
      screens: {
        'xs': '430px'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  "tailwindcss/nesting": "postcss-nesting",
  daisyui: {
    themes: ["retro"],
  },
};

