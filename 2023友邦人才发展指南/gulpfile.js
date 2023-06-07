const gulp = require('gulp')

const cssmin = require('gulp-cssmin')

const uglify = require('gulp-uglify')

const cssHandler = function (){
    return gulp
        .src('mobile/style/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'))
}

const jsHandler = function (){
    return gulp
        .src('mobile/javascript/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}


module.exports.cssHandler = cssHandler
module.exports.jsHandler = jsHandler