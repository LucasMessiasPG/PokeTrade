const elixir = require('laravel-elixir');

require('laravel-elixir-vue');
var templateCache = require('gulp-angular-templatecache');
var path = require('path');

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
        .task('build-template',"resources/assets/**/*.html")
        .webpack(['resources/assets/js/**/*.js','!resources/assets/js/**/*.spec.js']);

});


function makeTemplate() {

    var TEMPLATE_HEADER = 'module.exports = /*@ngInject*/ angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {';
    function makeUrl(url) {
        var temp_url;
        temp_url = path.normalize(url).split('/');
        
        if(temp_url.length <= 1)
            temp_url = path.normalize(url).split('\\');

        var new_url = [];
        new_url[0] = temp_url[temp_url.length - 2];
        new_url[1] = temp_url[temp_url.length - 1];
        return new_url.join('/');
    }

    return templateCache({
        templateHeader: TEMPLATE_HEADER,
        transformUrl: makeUrl,
        module: 'poke.template',
        standalone: true
    })
}

gulp.task('build-template', function () {
    return gulp.src("./resources/assets/**/*.html")
        .pipe(makeTemplate())
        .pipe(gulp.dest('resources/assets/js/template'));
});