/**
 * Created by Fabio on 17/06/2017.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var bump = require('gulp-bump');
var del = require('del');
var webmake = require('gulp-webmake');

gulp.task('webmake', function () {
    gulp.src([
        'src/be.js'
    ])
        .pipe(webmake())
        .pipe(gulp.dest('build/'));
});


gulp.task('dist', function () {
    gulp.src([
        'build/be.js'
    ])
        .pipe(uglify({
            compress: true,
            mangle: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', [
    'webmake',
    'dist'
]);