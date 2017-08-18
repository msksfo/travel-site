// I just installed gulp into node modules folder. now I want to import (require) the gulp library code into this file so that I have all of the functionality at my disposal. -----> var gulp = require('gulp');

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create(); // we only need the 'create' method, not the whole browser-sync package 


// everything in gulp revolves around tasks. when i run the gulp command from the command line, gulp is expecting me to have defined a default task in this file. ----->  the gulp library contains a method named 'task' which we will pass two arguments, 1) what we want the task to be named and 2) what we want to happen when this task runs ----> gulp.task('default', function(){}) 

gulp.task('watch', function(){ 
	// tell browserSync where our website lives.
	browserSync.init({
		//notify: false,  use this if you don't want notification box popup
		server: {
			baseDir: "app"
		}
	});
	// leverage the gulp-watch plugin here
	// pass this function 2 arguments. 1. the file on our computer that we want to watch for saved changes to. 2. a function that says what you want it to do.
	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){ // * means any file. *.js means any file with the js extension. *.css means any file with the css extension. ** is for the directory/folder. styles/**/*.css will take any css file in an styles folder, no matter how deep it is nested. This is configured to watch for any saved changes in any css file, at which time gulp will run the 'cssInject' task.
		// gulp.start('styles'); now 'styles' is replaces by 'cssInject', and we include 'styles' as a third argument, a dependency, in the cssInject gulp task below
		gulp.start('cssInject');
	})
})

gulp.task('cssInject', ['styles'], function(){ // ['styles'] is a dependency. so before gulp runs the cssInject task, it has to run and complete any dependencies ('styles'). ----> the compiled css file gets generated BEFORE it is handed off to broswerSync to update the changes.
	// this task will take the contents of the compiled css file, hand it over to browserSync so it can inject those styles into the page in real time (no browser refresh needed)
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});
