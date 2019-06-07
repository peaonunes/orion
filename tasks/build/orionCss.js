var gulp = require('gulp'),
  concat = require('gulp-concat')
merge = require('merge-stream')

module.exports = function() {
  console.info('Building Final Orion CSS')

  const fullCSS = gulp
    .src(['dist/semantic.css', 'dist/orion.css'])
    .pipe(concat('orion.css'))
    .pipe(gulp.dest('dist'))

  const minCSS = gulp
    .src(['dist/semantic.min.css', 'dist/orion.css'])
    .pipe(concat('orion.min.css'))
    .pipe(gulp.dest('dist'))

  return merge(fullCSS, minCSS)
}
