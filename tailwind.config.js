const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
      './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
      './vendor/laravel/jetstream/**/*.blade.php',
      './storage/framework/views/*.php',
      './resources/views/**/*.blade.php',
      './resources/js/**/*.vue'
    ],
    theme: {
      extend: {
        colors: {
          'main-text': '#161617',
          'purple': '#7b2c67',
          'purple-dark': '#3c374a',
          'purple-light': '#796e96',
          'maingray': '#778591'
        },
        fontFamily: {
          sans: ['Lato', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
