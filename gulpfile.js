const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/style/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    }
}

function clean() {
    return del(['dist/*']);
}

function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(cleanCSS())
    .pipe(rename({
        basename: 'style',
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
}

exports.clean = clean;
exports.styles = styles;