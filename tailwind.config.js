/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "anton":["Anton", 'sans-serif'],
        "rajdhani":["Rajdhani", 'sans-serif']
      },
      animation:{
        'spin-1':'spin 3s linear infinite',
        'spin-2':'spin 3s linear infinite alternate forwards'
      },
      screens:{
        'small':{'min':'0px','max':'320px'},
        'medium':{'min':'576px','max':'768px'}
      }
    },
  },
  plugins: [],
}

