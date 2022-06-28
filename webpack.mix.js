const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .extract()
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

const domain = 'mxcrm.test';
const homedir = require('os').homedir();

mix.browserSync({
  proxy: 'https://' + domain,
  host: domain,
  open: 'external',
  https: {
    key: homedir + '/.config/valet/Certificates/' + domain + '.key',
    cert: homedir + '/.config/valet/Certificates/' + domain + '.crt'
  },
  notify: true
})
