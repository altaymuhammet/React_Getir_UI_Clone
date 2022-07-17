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
      backgroundImage: theme => ({
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)'
      }),
      boxShadow: {
        'customShadow' : '0px 0px 10px -2px rgba(166,161,166,1)'
      }
    },
  },
  plugins: [],
}
