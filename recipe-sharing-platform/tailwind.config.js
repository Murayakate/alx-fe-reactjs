/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add this custom color to test the 'text-custom-color' class
        'custom-color': '#ff7849', 
      },
    },
  },
  plugins: [],
}