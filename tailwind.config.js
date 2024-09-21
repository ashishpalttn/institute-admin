/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      screens:{
        'xs':'10px'
      },
      colors: {
        sky: {
          50:'#f0f9ff',
          100:'#e0f2fe',
          200:'#bae6fd',
          300:'#7dd3fc',
          400:'#38bdf8',
          500:'#0ea5e9',
          600:'#0284c7',
          700:'#0369a1',
          800:'#075985',
          900:'#0c4a6e',
          950:'#082f49', //primary colors
        },
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
    },
  },
  plugins: [],
};
