var gulp = require('gulp'),
	path = require('path'),
	swPrecache = require('sw-precache');

var src = './src',
	dest = './',
	environment = 'production';

gulp.task('generate-service-worker', function(callback){
	swPrecache.write(path.join(dest, 'service-worker.js'), {
		staticFileGlobs: [
			'./src/assets/img/*.{png,jpg,gif,svg}', 
			'./src/assets/css/*.css',
			'./dist/*.js'
		],
		stripPrefix: dest
	}, callback);
});

gulp.task('default', ['generate-service-worker']);