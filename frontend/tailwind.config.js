/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#01132B",
        "blue-mid": "#106B88",
        "blue-light": "#64CDC6",
        "blue-pale": "#DAFEFA"
      }
    },
  },
  plugins: [],
}

