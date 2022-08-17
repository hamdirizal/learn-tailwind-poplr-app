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
        popGrey100: '#f3f6fa',
        popGrey140: '#f2f4f6',
        popGrey150: '#f4f5f9',
        popGrey300: '#7f91a3',
        popGrey400: '#7f91a3',
        popBlue400: '#1c86ff',
        popRed400: '#ff4d4f',
        popBlack700: '#123149',
        popGreen400: '#11cc7a',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}