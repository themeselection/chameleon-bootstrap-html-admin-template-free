var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp, callback) {
	return gulp.src(config.source.sass+'/core/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: config.autoprefixerBrowsers,
            cascade: false
        }))
		.pipe(gulp.dest(config.destination.css + '/core/'));
};