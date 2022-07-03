/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
        'brand-color' : '#4c3398',
        'primary-brand-color' : '#5d3ebc',
        'secondary-brand-color' : '#7849f7',
        'brand-yellow' : '#ffd300',
      },
      width: theme => ({
        'width-50' : '50%',
        'width-40' : '40%',
        'width-30' : '30%',
        'width-25' : '25%'
      }),
      height: theme => ({
        'height-500' : '500px',
      }),
    },
  },
  plugins: [],
}
