/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        strong:['Merienda'],
        horror:['Creepster'],
        normal:['Roboto Slab']
      }
    },
  },
  plugins: [],
}