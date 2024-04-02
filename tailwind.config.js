/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        olive: '#0d9488'
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};
