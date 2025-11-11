// gulpfile.js
import gulp from "gulp";
import shell from "gulp-shell";

export const serve = shell.task([
  "parcel serve starter/index.html --port 1234",
]);
export const build = shell.task(["parcel build starter/index.html"]);
export const test = shell.task(["mocha"]);
export const e2e = shell.task(["npx cypress run"]);

export default gulp.series(serve);
