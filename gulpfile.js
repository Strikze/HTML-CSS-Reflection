// import gulp from "gulp";
// import sass from "gulp-sass";
// import browserSync from "browser-sync"; //create()??

const gulp = require("gulp");
const sass = require("gulp-sass");
const maps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

function style() {
    return gulp.src(["./scss/**/*.scss", "./scssNew/**/*.scss"])
        .pipe(maps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(maps.write("./"))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["./scss/**/*.scss", "./scssNew/**/*.scss"], style);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;