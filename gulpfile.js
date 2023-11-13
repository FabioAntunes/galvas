var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('default', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("**").on("change", browserSync.reload);
});
