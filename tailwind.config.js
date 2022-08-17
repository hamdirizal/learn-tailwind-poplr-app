/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['Montserrat','Arial','sans-serif'],
      'serif': ['Arbutus Slab','Georgia','serif'],
      'mono': ['monospace'],
    },
    extend: {
      fontSize: {
        xxs: '.625rem'
      },
      colors:{
        popLightGrey: '#f3f6fa',
        popLinkBlue: '#1c86ff',
        popErrorRed: '#ff4d4f',
        popBlack: '#123149',
        popGreen: '#11cc7a',
        popMidGray: '#7f91a3',
        popInputGray: '#f4f5f9',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}