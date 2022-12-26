/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          "background": "#fff",
          "accent": "#F3F4F6",
          "primary": "#000",
          "secondary": "#666"
        },
      },
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