const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss')
        .copy('node_modules/angular', 'public/vendor')
        .copy('node_modules/angular-route', 'public/vendor')
        .copy('node_modules/angular-sanitize', 'public/vendor')
        .copy('node_modules/materialize-css/dist', 'public/vendor/materialize')
        // .copy('node_modules/bootstrap-sass/assets/stylesheets/', 'resources/vendor/bootstrap')
        .copy('node_modules/jquery/dist/jquery.js', 'public/vendor')
        .copy('resources/views/html', 'public/html')
        .copy('resources/assets/**/*.png','public')
        .copy('resources/assets/fonts/*.*','public/fonts')
        .webpack(['resources/assets/js/**/*.js','!resources/assets/js/**/*.spec.js']);
});
