$(function () {

	var $feedback = $('.js-feedback'),
		$feedbackTrig = $('.js-feedback-submit'),
		$feedbackModal = $('.js-feedback-modal'),
		buttonLoadCl = 'feedback__button_state_load',

		hidePopup = function () {
			setTimeout(function () {
				$popup.removeClass(popupActCl);
			}, 2000);
		};

	$feedbackTrig.on('click', function () {
		var $this = $(this);

		$this.addClass(buttonLoadCl);
		setTimeout(function () {
			$this.removeClass(buttonLoadCl);
			$feedback.slideUp();
			$feedbackModal.slideDown();
		}, 1000);
	});

});