const gulp = require('gulp');
const sass = require('sass');
const del = require('del');

const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/style/'
    },
    scripts: {
        scr: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    }
}

function clean() {
    return del(['dist/*']);
}

exports.clean = clean;