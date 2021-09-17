module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{css,js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     container: {
          center: true,
          padding: '1rem',
        },
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
          'md': '768px',
          // => @media (min-width: 768px) { ... }
          'lg': '992px',
          // => @media (min-width: 768px) { ... }
          'xl': '1201px',
          '2xl': '1441px',
        },
        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'transparent': 'transparent',
            'theme': '#008489',
            'dark': '#2c2c2c',
            'dark-900': '#1d293f',
            'gray': '#7c8087',
            'gray-100': '#f7f7f7',
            'gray-200': '#e6e6e6',
            'gray-300': '#909090',
            'gray-400': '#8c97ac',
            'gray-500': '#777777',
            'dark-opacity': 'rgba(0,0,0,0.25)',
        },
        extend: {
            fontFamily: {
                'lato': ['Lato', 'sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
                
                
            },
            fontSize: {
                '10xl': '80px',
                '9xl': '70px',
                '8xl': '50px',
                'sm': '15px',
                's13': '13px',
            },
            spacing: {
                'full': '100%',
                
            },
            boxShadow: {
                'gray': 'rgb(0 0 0 / 10%) 0px 0px 20px',
                'gray-box': '0 6px 12px rgb(0 0 0 / 16%)',
                'popup': 'rgb(26 26 29 / 30%) 0px 15px 46px -10px',
                'btn': 'rgb(0 0 0 / 16%) 0px 3px 6px',
            },
            maxWidth: {
            },
            margin: {
                'auto': 'auto',
            },
            zIndex: {
                '-1': '-1',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '11': '11',
                '12': '12',
                '13': '13',
                '14': '14',
                '15': '15',
            },
            height: {
                '100vw': '100vw',
            },
            content:{

            },
            transitionDuration: {
             '0': '0ms',
             '3000': '3000ms',
            }
        },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
