import $ from 'jquery';

class Modal {
	constructor(){
		// select the dom elements we need to work with
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");

		this.events(); // listen for the events as soon as the page loads

	}

	events(){
		// openModal and closeModal methods are not being called directly. They're being called by event handlers, so when they actually run, js keyword 'this' will have been reset to the element that was just clicked on. So chain on .bind(this)

		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes any key on the keyboard
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e){
		if (e.keyCode == 27){
			this.closeModal();
		}
	}

	openModal(){
		this.modal.addClass("modal--is-visible");
		// prevent browser default behavior of scrolling up
		return false;
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}


}

export default Modal;











