var gulp = require('gulp');
var sass = require('gulp-sass');
var cachebust = require('gulp-cache-bust');


gulp.task('styles', function () {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));

    gulp.src('./*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./'));
});




//Watch task
gulp.task('default', function () {
    gulp.watch('scss/**/*.scss', ['styles']);
});