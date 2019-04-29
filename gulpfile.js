/*=============================================
=            Gulp Starter by @dope            =
=============================================*/

/**
*
* The packages we are using
* Not using gulp-load-plugins as it is nice to see whats here.
*
**/
var gulp         = require('gulp');
var less         = require('gulp-less');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var uglify       = require('gulp-uglify');
var rename       = require("gulp-rename");
var imagemin     = require("gulp-imagemin");
var pngquant     = require('imagemin-pngquant');

/**
*
* Styles
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/
gulp.task('less', function() {
  gulp.src('less/**/*.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
  .pipe(gulp.dest('css'));
});

/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
  browserSync.init(['css/*.css', 'js/**/*.js', 'index.html'], {
    server: {
      baseDir: './'
    }
  });
});

/**
*
* Images
* - Compress them!
*
**/
gulp.task('images', function () {
  return gulp.src('images/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('images'));
});


/**
*
* Default task
* - Runs less, browser-sync, scripts and image tasks
* - Watchs for file changes for images, scripts and less/css
*
**/
gulp.task('default', ['less', 'browser-sync', 'images'], function () {
  gulp.watch('less/**/*.less', ['less']);
  gulp.watch('images/*', ['images']);
});
