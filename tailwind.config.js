// tailwind.config.js

const colors = require('tailwindcss/colors')

/* 
  Manrope google font - 300, 500, 700
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&display=swap" rel="stylesheet"></link> 
*/

module.exports = {
  darkMode: 'media',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    outline: false,
  },
  theme: {
    boxShadow: {
      default: '0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1)',
      'md': '0px 0px 4px rgba(0, 0, 0, 0.06), 0px 0px 6px rgba(0, 0, 0, 0.1)',
      'lg': '0px 0px 15px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.05)',
      'xl': '0px 0px 25px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.04)',
      '2xl': '0px 0px 50px rgba(0, 0, 0, 0.25)',
    },
    fontFamily: {
      'sans': ['Manrope', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      primary: {
        light: '#3B5FE0',
        DEFAULT: '#3B5FE0',
        dark: '#3B5FE0',
      },
      negative: {
        DEFAULT: '#F35B5B',
      },
      black: '#2B3139',
      secondary: '#439CEF',
      // gray: '#D4D4D8',
      white: '#ffffff',
      warn: '#F9B249',
      success: '#4BD059',
      // gray: {
      //   light: colors.gray[300],
      //   DEFAULT: colors.gray[400],
      //   dark: colors.gray[500],
      // },
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
    },
  },
  plugins: [
  ],
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    }
  }
}
