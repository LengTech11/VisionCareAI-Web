/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'navbar-xl': {'max': '825px'},
    }
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    daisyui,
  ],
}