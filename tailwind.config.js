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
      'tablet-xl': {'max': '825px'},
      'tablet-lg': {'max': '700px'},
      'tablet-md': {'max': '635px'},
      'phone-xl': {'max': '400px'},
      'phone-lg': {'max': '460px'},
    }
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    daisyui,
  ],
}