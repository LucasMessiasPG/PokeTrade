var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");
var sass = require('gulp-sass');

var path = {
    dev:{
        ts:'dev/**/*.ts',
        html:'dev/**/*.html',
        img:'dev/assets/img/**/*.*',
        css:'dev/assets/css/**/*.css',
        scss:'dev/assets/scss/**/*.scss',
    },
    app:{
        ts:'app',
        html:'app',
        img:'app/assets/img',
        css:'app/assets/css',
        scss:'app/assets/css'
    }
};


gulp.task('build-sass', function () {
    return gulp.src(path.dev.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.app.scss));
});

gulp.task('build-img',function(){
    return gulp.src(path.dev.img)
        .pipe(imagemin({optimizationLevel:5}))
        .pipe(gulp.dest(path.app.img))
})
gulp.task('build-css',function(){
    return gulp.src(path.dev.css)
        .pipe(gulp.dest(path.app.css))
})

gulp.task('build-html',function(){
    return gulp.src(path.dev.html)
        .pipe(gulp.dest(path.app.html))
})

gulp.task('build-ts',function(){
    var tsResult = gulp.src(path.dev.ts)
        .pipe(ts(tsProject));

    tsResult.js.pipe(gulp.dest(path.app.ts));
})

gulp.task('watch',function(){
    gulp.watch(path.dev.img,['build-img'])
    gulp.watch(path.dev.css,['build-css'])
    gulp.watch(path.dev.scss,['build-sass'])
    gulp.watch(path.dev.html,['build-html'])
})

gulp.task('default',['watch','build-html','build-img','build-css','build-sass'])