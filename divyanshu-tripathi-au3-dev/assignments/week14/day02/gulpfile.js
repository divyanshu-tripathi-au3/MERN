var gulp = require('gulp')
var htmlmin = require('gulp-html-minifier')

gulp.task("minify", function(){
    gulp.src("./src/index.html").pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest("./dist"))
});