$(function(){
	'use strict';
	// Colors Page
	if ($('body').hasClass('colors')) {
		var pigContainer = $('.racist-pig').parent(),
			pigContainerHeight = pigContainer.height(),
			pigContainerWidth = pigContainer.width();
		
		$('.colors .censor')
			.bind('click', function() {
				if(pigContainer.find('.blackout').length <= 0) {
					pigContainer
						.append('<span class="blackout">This Image Has Been Censored For Your Protection')
						.find('.blackout')
						.css({
							'height': pigContainerHeight + 14,
							'width': pigContainerWidth + 14
						});
				} else {
					pigContainer
						.find('.blackout')
						.remove();
				}
			});
	}
	
});