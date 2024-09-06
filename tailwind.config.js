/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,jsx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'accent': '#FF5757',
      'blue': {
        primary: '#509CDB',
        secondary: '#509CDB',
        transparent: '#EBF6FF'
      },
      'dark-blue': {
        primary: '#152259',
        secondary: '#13296A',
        transparent: '#EFF3FA',
      },
      'grey': {
        10: '#F1F1F1',
        100: '#A7A7A7',
        200: '#C4C4C4',
        300: '#8A8A8A',
        400: '#4F4F4F',
        500: '#424242',
      },

    },
    extend: {
      fontSize: {
        36: '36px',
        24: '24px',
        16: '16px',
        14: '14px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      scale: {
        '115': '1.05',
      }
    }
  },
  plugins: [],
}

