var gulp = require('gulp'),
  minifyCSS = require('gulp-clean-css'),
  tasks = require('../config/tasks')

module.exports = function() {
  const postcss = require('gulp-postcss')

  return gulp
    .src('orion.css')
    .pipe(
      postcss([
        require('postcss-import'),
        require('tailwindcss')(
          'node_modules/@inloco/atomic-bomb/tailwind.config.js'
        ),
        require('autoprefixer')
      ])
    )
    .pipe(minifyCSS(tasks.settings.minify))
    .pipe(gulp.dest('dist'))
}
