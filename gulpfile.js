const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
// const sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', () => {
  return del('./compiled.js');
});

gulp.task('compile', () => {
	return gulp.src(['./*.js', '!./gulpfile.js'])
	// .pipe(sourcemaps.init())
	.pipe(concat('compiled.js', {newLine: '\n\n==================================\n\n'}))
	// .pipe(sourcemaps.write())
	.pipe(gulp.dest('./'))
})

gulp.task('default', gulp.series('clean', 'compile'));