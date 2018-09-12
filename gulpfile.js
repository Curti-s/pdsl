let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init({
        baseDir: "./"
    });
    gulp.watch('*.html').on('change',browserSync.reload);
});

gulp.task('default',['serve']);
