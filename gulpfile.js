var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    angular2 = require('gulp-angular2'),
    watch = require('gulp-watch');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});


gulp.task('watch-styles', function(){
  return watch('src/**/*.scss', function () {
    gulp.start('styles');
  });
});

gulp.task('styles', function(){
  return gulp.src('src/**/*.scss')
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
  }}))
  .pipe(sass())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('dist/styles/'))
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist/styles'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch-scripts', function(){
  return watch('src/**/*.js', function () {
    gulp.start('scripts');
  });
});

gulp.task('scripts', function(){
  return gulp.src('./src/main.js')
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
  }}))
  .pipe(angular2())
  .pipe(gulp.dest('dist/scripts/'))
  // .pipe(rename({suffix: '.min'}))
  // .pipe(uglify())
  // .pipe(gulp.dest('dist/scripts/'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch-html', function(){
  return watch('./src/components/**/*.html', function () {
    gulp.start('html');
  });
});

gulp.task('html', function() {
  return gulp.src('./src/components/**/*.html')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('dist/html/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch-app', function(){
  return watch('./*.html', function () {
    gulp.start('bs-reload');
  });
});


// gulp.task('default', ['browser-sync'], function(){
//   gulp.watch("src/**/*.scss", ['styles']);
//   gulp.watch("src/**/*.js", ['scripts']);
//   gulp.watch("src/components/**/*.html", ['html']);
//   gulp.watch("*.html", ['bs-reload']);
// });

gulp.task('default', ['browser-sync', 'html', 'styles', 'scripts', 'watch-styles', 'watch-scripts', 'watch-html', 'watch-app']);