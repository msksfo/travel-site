import $ from 'jquery';

class MobileMenu {
	constructor(){ //this function will be run immediately when a new object is created with this class.

	/* this is shitty spaghetti jquery code. don't do this, below. 

	$('.site-header__menu-icon').click(function(){
		console.log('the top right icon was clicked');
	})
	
	*/

	// instead, do this, below 
	this.siteHeader = $('.site-header');
	this.menuIcon = $('.site-header__menu-icon'); // store the dom selection for the menu icon element.
	this.menuContent = $('.site-header__menu-content');
	this.events();

	} // closes the constructor 

	events(){ // list all events that we want to watch for
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		console.log(this);
	} 

	toggleTheMenu(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}		
}

export default MobileMenu;











