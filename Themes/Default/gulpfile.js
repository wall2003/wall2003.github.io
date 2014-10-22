var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', function () {
    gulp.src('templates/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('../Default/'));
});

//.\node_modules\.bin\gulp default