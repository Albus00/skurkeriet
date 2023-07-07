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
        'modesto': 'modesto-condensed',
        'indivisible': 'indivisible, sans-serif',
        'vinyl': ['var(--font-vinyl)'],
        'cascadia': ['var(--font-cascadia)']
      },
      colors: {
        black: '#030302',
        yellow: '#F9EA38',
        grey: '#2F2F2F',
        whiteText: '#E3E3E3'
      },
      backgroundImage: {
        'group': "url('/images/group.jpg')",
        'groupMobile': "url('/images/group-mobile.jpg')"
      },
      height: {
        'thirdWidth': '30vw' // Make height a third of the width of screen (excluding padding)
      }
    },
    screens: {
      desktop: { 'min': '1225px' },
      handheld: { 'max': '1024px' },
      mobile: { 'max': '750px' },
      thin: { 'max': '340px' }
    },
  },
  plugins: [],
}
