const gulp = require('gulp')
const sass = require('sass')
const del = require('del')

function clean() {
    return del(['dist']);
}

exports.clean = clean;