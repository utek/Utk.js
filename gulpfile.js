'use strict';
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', function () {
    return gulp.src('tests/test_*.js')
        .pipe(jasmine());
});
