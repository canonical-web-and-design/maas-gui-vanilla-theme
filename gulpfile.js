var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    scsslint = require('gulp-scss-lint'),
    cssnano = require('gulp-cssnano');
    util = require('util');

/* Helper functions */
function throwSassError(sassError) {
    throw new gutil.PluginError({
        plugin: 'sass',
        message: util.format(
            "Sass error: '%s' on line %s of %s",
            sassError.message,
            sassError.line,
            sassError.file
        )
    });
}

/* Gulp instructions start here */
gulp.task('help', function() {
    console.log('sass - Generate the min and unminified css from sass');
    console.log('build - Generate css');
    console.log('watch - Watch sass files and generate unminified css');
    console.log('test - Lints Sass');
});

gulp.task('sasslint', function() {
    var path = (gutil.env.file)? gutil.env.file : '**/*.scss';
    return gulp.src('scss/' + path)
        .pipe(scsslint({ 'config': '.scss-lint.yml' }))
        .pipe(scsslint.failReporter());
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({
            style: 'expanded',
            errLogToConsole: true,
            onError: throwSassError
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});

gulp.task('build', ['sasslint', 'sass']);

gulp.task('sass-lite', function() {
    return gulp.src('scss/build.scss')
        .pipe(sass({ style: 'expanded', errLogToConsole: true }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass-lite']);
});

gulp.task('test', ['sasslint']);

gulp.task('default', ['help']);
