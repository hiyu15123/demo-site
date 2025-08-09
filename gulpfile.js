const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function serve(done) {
   browserSync.init({
      server: {
         baseDir: './',
         index: 'index.html'
      }
   });
   done();
}

function reload(done) {
   browserSync.reload();
   done();
}

function compileSass() {
   return gulp.src('./assets/css/style.scss')
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      .pipe(browserSync.stream())
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest('./assets/css'))
}

function watchFiles() {
   gulp.watch('./*.html', reload);
   gulp.watch('./assets/js/*.js', reload);
   gulp.watch('./assets/css/**/*.scss', compileSass);
}

exports.default = gulp.series(compileSass, serve, watchFiles);
