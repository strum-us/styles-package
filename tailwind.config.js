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
      gray: {
        light: colors.gray[300],
        DEFAULT: colors.gray[400],
        dark: colors.gray[500],
      },
      // gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'strumtheme' : {                     
           'primary' : '#3B5FE0',           /* Primary color */
           'primary-focus' : '#8462f4',     /* Primary color - focused */
           'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

           'secondary' : '#439CEF',         /* Secondary color */
           'secondary-focus' : '#f3cc30',   /* Secondary color - focused */
           'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

           'accent' : '#37cdbe',            /* Accent color */
           'accent-focus' : '#2aa79b',      /* Accent color - focused */
           'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

           'neutral' : '#3d4451',           /* Neutral color */
           'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#f9fafb',          /* Base color, a little darker */
           'base-300' : '#d1d5db',          /* Base color, even more darker */
           'base-content' : '#1f2937',      /* Foreground content color to use on base color */

           'info' : '#439CEF',              /* Info */
           'success' : '#4BD059',           /* Success */
           'warning' : '#F9B249',           /* Warning */
           'error' : '#F35B5B',             /* Error */
        },
      },
    ],
  },
}
