/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'industry': 'Industry Inc Base',
        'roboto': 'Roboto',
        'vinyl': 'Rubik Vinyl'
      },
      colors: {
        black: '#030302',
        yellow: '#FFEC0A',
        grey: '#2F2F2F',
        blackText: '#030302'
      }
    },
    screens: {
      handheld: { 'max': '1024px' },
      mobile: { 'max': '640px' },
      thin: { 'max': '340px' }
    },
  },
  plugins: [],
}
