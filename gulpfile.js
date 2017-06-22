'use strict';

const source = require('vinyl-source-stream');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const uglifyjs = require('gulp-uglify');
const composer = require('gulp-uglify/composer');
const gutil = require('gulp-util');
const jsdox = require('jsdox');
const gulp = require('gulp');
const del = require('del');
const babelify = require('babelify');

const src = './index.js';

const opts = {
    uglify: {
        min: {
            mangle: true,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            }
        },

        dev: {
            compress: false,
            mangle: false,
            output: {
                beautify: true
            }
        }
    }
};

/**
 * Builds the dist versions for the browser.
 *
 * @param {Boolean} min Whether the output should be minified.
 * @returns {Object} The gulp stream object.
 */
function build(min) {
    return browserify({
        standalone: 'be',
        entries: src,
        debug: true
    }).transform(babelify, {presets: ["es2015"]}).bundle().

    pipe(source('bundle.tmp.js')).

    pipe(buffer()).

    //pipe(minify(min ? opts.uglify.min : opts.uglify.dev).on('error', gutil.log)).
    pipe(uglifyjs(min ? opts.uglify.min : opts.uglify.dev).on('error', gutil.log)).

    pipe(rename({
        basename: 'be',
        extname: min ? '.min.js' : '.js'
    })).

    pipe(gulp.dest('dist'));
}

/** Distributable */
gulp.task('cleanup:dist', () => {
    return del.sync('dist/*.js');
});

gulp.task('compile:dist', build.bind(null, false));
gulp.task('minify:dist', build.bind(null, true));

/** Documentation */
gulp.task('cleanup:docs', () => {
    return del.sync('docs/**.*');
});

gulp.task('compile:docs', (done) => {
    jsdox.generateForDir('./src/checks', './docs', null, done, null);
});

gulp.task('dist', ['cleanup:dist', 'compile:dist', 'minify:dist']);
gulp.task('docs', ['cleanup:docs', 'compile:docs']);
gulp.task('build', ['dist', 'docs']);