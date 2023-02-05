/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "background": "#21262E",
          "accent": "#4B5563",
          "primary": "#ddd",
          "secondary": "#ddd"
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")]
}