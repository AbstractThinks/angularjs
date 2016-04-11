var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('scripts',['clean'], function(){
    gulp.src('./vendor/**/*.js')
    	.pipe(sourcemaps.init())
        .pipe(concat("app.js"))    //www/js下所有的js文件 合并到libs.js
        .pipe(gulp.dest("./build"))  //合并后文件放入目标文件夹
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        //.pipe(uglify())             //代码混淆
        .pipe(gulp.dest("./build"))  //合并后文件放入目标文件夹
        
})

gulp.task('watch', function() {
  gulp.watch('./vendor/**/*.js', ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);
