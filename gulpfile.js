var gulp = require('gulp');
var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();
var reload = browserSync.reload;

var amdOptimize = require("amd-optimize");

// 合并js
gulp.task('rjs', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(amdOptimize("src/js/app", {
			paths: {
				'jquery': 'src/js/lib/jquery',
				'domReady': 'src/js/lib/domReady'
			}
		}))
		.pipe($.concat("app.js")) //合并
		.pipe(gulp.dest("src/out")) //输出保存
		.pipe($.rename("app.min.js")) //重命名
		.pipe($.uglify()) //压缩
		.pipe(gulp.dest("src/out")) //输出保存
});


// 1、进入 app/js 目录 shell 执行 node r.js -o build.js

// BrowserSync Task (Live reload)
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: ['src']
		}
	})
});

gulp.task('watch', ['browserSync'], function() {
	gulp.watch('src/**/*.html').on('change', reload);
});

gulp.task('default', ['watch']);
