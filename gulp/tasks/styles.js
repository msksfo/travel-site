// I just installed gulp into node modules folder. now I want to import (require) the gulp library code into this file so that I have all of the functionality at my disposal. -----> var gulp = require('gulp');

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer])) //run contents of stylesheet through post css filters
	.on('error', function(errorInfo){ // handle errors without the task quitting
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles')); // use return so that gulp is aware when the function completes. (put pipes on separate lines for readability)
})