var gulp =			require("gulp");
var gutil =			require("gulp-util");
var sass =			require("gulp-sass");
var autoprefixer =	require('gulp-autoprefixer');

var input = "./public/scss/app.scss";
var output = "./public/css/";

gulp.task("css", function() {
	return (gulp.src(input)
		.pipe(sass())
		.on("error", gutil.log)
		.pipe(autoprefixer())
		.pipe(gulp.dest(output))
	);
});

gulp.task("watch", function() {
	gulp.watch("./public/scss/**/*.scss", ["css"]);
});
