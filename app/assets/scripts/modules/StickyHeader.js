import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor(){
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");

		this.createHeaderWaypoint(); // because we need this to run on page load

		// create a property that is a collection of page section elements
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a"); // this property is a collection of header link elements
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling(){
		// call the smooth scroll library on each of the header links
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint(){
		var that = this;

		new Waypoint({
			// regarding the element property below. waypoints is expecting a javascript native dom element. [0] works because the first item in a jquery array like object is always a pointer to the native dom object
			element: this.headerTriggerElement[0],
			handler: function(direction){
				if (direction == 'down'){
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if (direction == 'down'){
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				// customize how early or late in the scroll a waypoint is triggered. by default, the offset is zero (top edge of viewport)
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if (direction == 'up'){
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				// customize how early or late in the scroll a waypoint is triggered. by default, the offset is zero (top edge of viewport)
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;








