const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
})

gulp.task('server', function(cb) {
    gulb.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

gulp.task('default', gulp.series('build','serve'));