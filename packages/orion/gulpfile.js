const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')

const buildCSS = () => {
  return gulp
    .src('orion.css')
    .pipe(plumber())
    .pipe(
      postcss([
        require('postcss-import'),
        require('tailwindcss')(
          'node_modules/@inloco/atomic-bomb/tailwind.config.js'
        ),
        require('autoprefixer'),
        cssnano()
      ])
    )
    .pipe(gulp.dest('dist'))
}

exports.default = buildCSS
exports.watch = () => {
  gulp.watch('./src/**/*.css', buildCSS)
}
