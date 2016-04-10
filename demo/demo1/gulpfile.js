var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require("gulp-rename")
var del = require('del');

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('scripts',['clean'], function(){
    gulp.src('./vendor/**/*.js')
    	.pipe(sourcemaps.init())
        .pipe(concat("app.js"))    //www/js下所有的js文件 合并到libs.js
        .pipe(gulp.dest("./build"))  //合并后文件放入目标文件夹                //混淆文件
        .pipe(rename("app.min.js"))    //重命名
        .pipe(sourcemaps.write())
})

gulp.task('watch', function() {
  gulp.watch('./vendor/**/*.js', ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);