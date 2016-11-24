var gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');

gulp.task("css", function(){
    return gulp.src('css/main.css')
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer('last 5 versions'))
        .pipe(uglifycss())
        .pipe(gulp.dest('css'));
})

gulp.task("js", function(){
    return gulp.src('js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
})