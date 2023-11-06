// //CSS Y SASS
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require ('gulp-sourcemaps');

function css() {
  return src("src/scss/app.scss").pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('.')).pipe(dest("src/styles"));
}

function dev() {
  watch("src/scss/**/*.scss", css);
}

exports.css = css;
exports.dev = dev;
