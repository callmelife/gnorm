const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config').images;
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
    
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imagemin([
      imagemin.gifsicle(),
      imageminMozjpeg({quality: 80}),
      pngquant({
        quality: '60-80',
        speed: 2
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest(config.dest));
});
