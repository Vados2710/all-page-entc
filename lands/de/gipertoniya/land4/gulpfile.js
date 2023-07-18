'use strict';
var autoprefixer = require('gulp-autoprefixer'),
	//browserSync  = require('browser-sync'),
	cache        = require('gulp-cache'),
	cleanCSS     = require('gulp-clean-css'),
	concat       = require('gulp-concat'),
	fs           = require('fs'),
	gulp         = require('gulp'),
	notify       = require('gulp-notify'),
	criticalCSS  = require('penthouse'),
	rename       = require('gulp-rename'),
	replace      = require('gulp-replace'),
	sass         = require('gulp-sass'),
	sassGlob     = require('gulp-sass-glob'),
	sourcemaps   = require('gulp-sourcemaps'),
	svgmin       = require('gulp-svgmin'),
	svgSprite    = require('gulp-svg-sprites'),
	uglify       = require('gulp-uglify');

// Insert a name of lib's folder in node_modules css
var cssLibs = [
	'normalize-css'
];

// Insert a path to lib's .js file you want to import including file itself
var jsLibs = [
	'./js/scripts.js' // Always at the end
];

gulp.task('clearCache', function (done) {
	return cache.clearAll(done);
});

// JavaScript
gulp.task('js', function() {
	return gulp.src(jsLibs)
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.min.js'))
		.pipe(uglify({
			compress: false,
			mangle: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./js'))
});

// Sass
gulp.task('sass', function() {
	return gulp.src('./css/scss/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({
			outputStyle: 'expand',
			includePaths: cssLibs.map(function(lib) {
				return './node_modules/' + lib;
			})
		}).on('error', notify.onError()))
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(autoprefixer([ 'last 2 versions' ]))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'))
});

gulp.task('svgmin', function () {
	return gulp.src('./img/icons/**/*.svg')
		.pipe(svgmin())
		.pipe(svgSprite({
			mode: "defs",
			preview: false,
			dims: false
		}))
		.pipe(rename('icons-sprite.svg'))
		.pipe(replace('<svg width', '<symbol width'))
		.pipe(replace('</path></svg>', '</path></symbol>'))
		.pipe(replace('</image></svg>', '</path></symbol>'))
		.pipe(replace(/width=\"[0-9]+\"\sheight=\"[0-9]+\" /g, ''))
		.pipe(replace('position:absolute', 'height:0;position:absolute;z-index:-1'))
		.pipe(gulp.dest('./img/'))
});

// Watch for changes
gulp.task('watch', gulp.parallel('sass', 'js', 'svgmin', function() {
	gulp.watch('css/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('js/scripts.js', gulp.parallel('js'));
}));

// Default task runs with single command 'gulp' from terminal
gulp.task('default', gulp.parallel('watch'));
