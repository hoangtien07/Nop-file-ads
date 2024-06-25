// Import thư viện
import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import concat from "gulp-concat";
import cleanCSS from "gulp-clean-css";
import browserSync from "browser-sync";
import ejs from "gulp-ejs";
import rename from "gulp-rename";
import htmlmin from "gulp-htmlmin";
// import imagemin from "gulp-imagemin";
import { readFileSync } from "fs"; // Import fs

// Khai báo biến
const browser = browserSync.create();
const sass = gulpSass(dartSass);

// Compile SCSS into CSS
gulp.task("sass", function () {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css/"))
    .pipe(browser.stream());
});

// Concatenate and minify CSS
gulp.task("build-css", function () {
  return gulp
    .src("src/css/*.css")
    .pipe(concat("bundle.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browser.stream());
});

// Compile EJS templates into HTML
gulp.task("ejs", function () {
  const data = JSON.parse(readFileSync("./data.json")); // Đường dẫn tới file data.json
  return gulp
    .src("src/templates/layouts/*.ejs")
    .pipe(ejs(data, {}, { ext: ".html" }))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("src/html/"))
    .pipe(browser.stream());
});

// Minify HTML
gulp.task("minify-html", function () {
  return gulp
    .src("src/")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(browser.stream());
});

// Optimize images
// gulp.task("images", function () {
//   return gulp.src("src/img/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
// });

// Set up BrowserSync server and watch for changes
gulp.task("serve", function () {
  browser.init({
    server: {
      baseDir: "src/",
    },
  });
});

gulp.task("watch", function () {
  gulp.watch("src/scss/*.scss", gulp.series("sass", "build-css"));
  gulp
    .watch("src/templates/**/*.ejs", gulp.series("ejs", "minify-html"))
    .on("change", browser.reload);
  gulp.watch("src/js/*.js").on("change", browser.reload);
});

// Default task
gulp.task(
  "default",
  gulp.series(
    gulp.parallel("sass", "ejs"),
    "build-css",
    "minify-html",
    gulp.parallel("serve", "watch")
  )
);
