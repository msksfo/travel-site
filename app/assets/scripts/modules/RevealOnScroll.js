// in order to use jQuery in this module, we need to import it first.
import $ from "jquery"; // this will automatically work as long as jquery is in node modules folder

class RevealOnScroll {
	constructor() {
		// select the items to reveal when scrolled to
		this.itemsToReveal = $(".feature-item");
		this.hideInitially(); // we want this to run on page load
	}

	hideInitially(){
		// things can't be revealed unless they are hidden. SO--> initially hide them with this method.
		//reference the property that points to the elements
		this.itemsToReveal.addClass("reveal-item");
	}
}

export default RevealOnScroll;