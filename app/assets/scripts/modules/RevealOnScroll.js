// in order to use jQuery in this module, we need to import it first.
import $ from "jquery"; // this will automatically work as long as jquery is in node modules folder

// the waypoints package does not have a 'main' file. so we need to manually point to the node modules folder and specify the exact file we want
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor() {
		// select the items to reveal when scrolled to. this is a collection of elements with references to the four dom elements on the page that have the class of feature-item
		this.itemsToReveal = $(".feature-item");
		this.hideInitially(); // we want this to run on page load
		this.createWaypoints(); // we want this function to run on page load
	}

	hideInitially(){
		// things can't be revealed unless they are hidden. SO--> initially hide them with this method.
		//reference the property that points to the elements
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints(){
		this.itemsToReveal.each(function(){
			var currentItem = this;
			
			new Waypoint({ // each Waypoint object needs at least these 2 properties
				element: currentItem,  // the dom element to watch for as we scroll down --> whichever dom element is currently being looped through

				handler: function(){ // what we want to happen when the element is scrolled to --> add the css modifyer so that it gradually becomes visible
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset: '85%'
			});
		});
	}
}

export default RevealOnScroll;











