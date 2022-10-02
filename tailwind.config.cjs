/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '##DDDDDD',
        alertWarning: '#E61445',
        alertWarningLight: '#FFD7E0',
        alertSuccess: '#00805E',
        alertSuccesLight: '#D3FFE2',
        textMain: '#240D57',
        textSub: '#4F4F4F',
      },
      fontFamily: {
        helvetica: 'Helvetica',
      },
    },
  },
  plugins: [],
};
