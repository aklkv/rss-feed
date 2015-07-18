var gulp = require('gulp');
var hammerdown = require('gulp-hammerdown');

gulp.task('documentation', function () {
    return gulp.src('./*.html')
        .pipe(hammerdown())
        .pipe(gulp.dest('./markdown/'));
});

gulp.task('default', ['documentation']);
