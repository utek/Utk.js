'use strict';
var gulp = require('gulp');
var jasmine = require('gulp-jasmine'); // jshint ignore:line
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('test', function () {
    return gulp.src('tests/test_*.js')
        .pipe(jasmine());
});

gulp.task('clean', function () {
    return gulp.src('dist', {
            read: false
        })
        .pipe(clean());
});

gulp.task('build', function () {
    return gulp.src('src/*.js')
        .pipe(concat('utk.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('utk.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {

});
