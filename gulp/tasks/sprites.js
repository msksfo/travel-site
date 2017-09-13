/* this will take all of the individual icon files, and stitch them together into one file. */

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite'); /* this is the gulp package that will stitch icons together */
var rename = require('gulp-rename');
var del = require('del');
var svg2png = require('gulp-svg2png');


//the svgSprite package needs it's options to be defined in an object
var config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function(){
					return function(sprite, render){
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function(){
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});


gulp.task('createSprite',['beginClean'], function(){
	/* use gulp.src to move the icons into gulp's pipeline. whenever we use src, we need to use return. give the src a path. */
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config)) // pass the svgSprite package an object named 'config' 
		.pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('createPngCopy', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.svg')
	.pipe(svg2png())
	.pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'],function(){
	return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
	.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.css')
	.pipe(rename('_sprite.css')) /* this gulp package will rename the file, adding the underscore */
	.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
	return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite','createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);














