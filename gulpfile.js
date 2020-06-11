var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
 
gulp.task('sitemap', function () {
    gulp.src('index.html', {
            read: true
        })
        .pipe(sitemap({
            siteUrl: 'https://popark.it'
        }))
        .pipe(gulp.dest('./'));
});