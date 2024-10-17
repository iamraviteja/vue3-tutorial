/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(blue|green|red|yellow|purple)-(500|600)/,
    },
    {
      pattern: /text-(blue|green|red|yellow|purple)-(500|600)/,
    },
  ],
}
