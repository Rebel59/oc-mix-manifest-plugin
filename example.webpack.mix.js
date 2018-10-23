let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 | 
 */

var theme = 'themename';
var url = 'localurl.test';

mix.options({ processCssUrls: false });


mix.setPublicPath('themes/'+theme+'/assets/');
mix.sass('./themes/'+theme+'/assets/src/scss/theme.scss', 'dist/theme.css');

mix.browserSync({
    proxy: url,
    files: [
        'themes/'+theme+'/assets/dist/**/*',
        'themes/'+theme+'/layouts/**/*',
        'themes/'+theme+'/pages/**/*',
        'themes/'+theme+'/partials/**/*',
    ]
});

mix.version();