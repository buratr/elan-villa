/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
        'xl': '1600px',
        '2xl': '1920px',
      },
      spacing: {
        '35': '35px',
        '50': '50px',
        '88': '88px'
      },
      colors: {
        light: {
          DEFAULT: '#F8F8F8'
        },
        black: {
          DEFAULT: '#131313',
          main: '#131313',
          light: '#232224',
          lighter: '#626161',
          noir: '#000000',
          secondary: '#333333'
        },
        blue: '#000023',
        gray: {
          DEFAULT: '#636b78',
          main: '#636b78',
          dark: '#1e1e1e',
          light: '#a1a6ac',
          lighter: '#F7F7F7',
          mute: '#666666',
          disabled: '#cfcfcf',
          border: '#6666663D',
          darker: '#323133'
        },
        purple: {
          DEFAULT: '#7c4db7',
          main: '#7c4db7',
          secondary: '#6D4F9C',
          light: '#C09FF9',
          lighter: '#b6a5ca',
          dark: '#3E127F',
          darker: '#50156B'
        }
      },
      boxShadow: {
        'none': '0',
        'main': '-5px 7px 25px -8px rgba(0, 0, 0, 0.25)',
        'header': '0px 4px 14px 0px rgba(103, 100, 100, 0.25)',
        'select': '0px 4px 14px 0px #00000040',
        'image': '0px 4px 20px 0px #00000080',
        'button': '0px 4px 4px 0px #00000040',
        'anchor': '0px 4px 14px 0px #67646440'
      },
      fontFamily: {
        'athena': ['Athena', 'sans-serif'],
        'amsterdam': ['Amsterdam', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      strokeWidth: {
        '2': '2px',
        '3': '4px',
        '4': '6px',
        '5': '8px',
        '6': '10px',
        '7': '12px',
        '8': '14px',
        '9': '16px',
      },
      gradientColorStopPositions: {
        9: '9%',
        91: '91%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    }
  },
};
