var autoprefixer = require('gulp-autoprefixer'),
	browserSync  = require('browser-sync'),
	cache        = require('gulp-cache'),
	cleanCSS     = require('gulp-clean-css'),
	concat       = require('gulp-concat'),
	gulp         = require('gulp'),
	imagemin     = require('gulp-imagemin'),
	notify       = require('gulp-notify'),
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

gulp.task('cssVersion', function() {
	const dateTime = new Date();
	const timeStamp = dateTime.getHours() + '' + dateTime.getMinutes() + dateTime.getSeconds();
	return gulp.src('./style.css')
		.pipe(replace(/(Version:\s+\d+\.\d+\.\d+).*/g, `$1.${timeStamp}`))
		.pipe(gulp.dest('./'))
});

// Image and SVG optimization
gulp.task('imagemin', function() {
	return gulp.src(['./img/**/*.{png,jpg,gif}'])
		.pipe(cache(imagemin()))
		.pipe(gulp.dest( './img' ));
});

// JavaScript
gulp.task('js', ['cssVersion'], function() {
	return gulp.src(jsLibs)
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.min.js'))
		.pipe(uglify({
			compress: false,
			mangle: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./js'))
		.pipe(browserSync.reload({ stream: true }))
});

// Sass
gulp.task('sass', ['cssVersion'], function() {
	return gulp.src('./css/scss/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: cssLibs.map(function(lib) {
				return './node_modules/' + lib;
			})
		}).on('error', notify.onError()))
		.pipe(autoprefixer([ 'last 2 versions' ]))
		.pipe(gulp.dest('./css'))
		.pipe(sourcemaps.write())
		.pipe(rename({ suffix: '.min', prefix: '' })) // suffix .min
		.pipe(cleanCSS()) // min css
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({ stream: true }))
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
		.pipe(replace(/width=\"[0-9]+\"\sheight=\"[0-9]+\" /g, ''))
		.pipe(replace('position:absolute', 'height:0;position:absolute;z-index:-1'))
		.pipe(gulp.dest('./img/'))
		.pipe(browserSync.reload({ stream: true }));
});

// Watch for changes
gulp.task('watch', ['sass', 'js', 'svgmin'], function() {
	gulp.watch(['css/scss/**/*.scss'], ['sass']);
	gulp.watch(['js/scripts.js'], ['js']);
	gulp.watch(['img/**/*.{png,jpg,gif}'], function ( event ) {
		if (event.type === 'added') {
			gulp.start('imagemin', browserSync.reload);
		}
	});
	gulp.watch(['img/icons/*.svg'], function ( event ) {
		if (event.type === 'added') {
			gulp.start('svgmin', browserSync.reload);
		}
	});
	gulp.watch(['./*.html', './*.php', './**/*.php'], browserSync.reload);
});

// Default task runs with single command 'gulp' from terminal
gulp.task('default', ['watch']);
gulp.task('img', ['imagemin']);
