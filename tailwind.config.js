/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handjet: ['Handjet', 'sans-serif'],
        monoton: ['Monoton', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        trainOne: ['Train One', 'sans-serif'],
      },
      colors: {
        smoothYellow: '#EBCB74',
        eletricBlue: '#2980B9',
        smoothWhite: '#FCF6E4',
        smoothGrey: '#3E586D',
        smoothBlue: '#8CB3C1',
      },
      animation: {
        'fade-in-out': 'fadeInOut 6s infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 25%': { opacity: '0' },
          '25%, 50%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      padding: {
        '9.8rem': '9.8rem',  
        '13.5rem': '13.5rem',      
        '11rem': '11rem',      
        '16.5rem': '16.5rem',      

      },
    },
  },
  plugins: [],
}

