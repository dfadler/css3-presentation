$(function(){
	
	// Forces strict mode
	'use strict';
	
	// Opens External Links In New Window
	$("a[href^='http://'], a[href^='https://']")
		.attr(
			"target","_blank"
		);

	// Colors Page
	if($('body').hasClass('colors')) {
		
		var pigContainer = $('.racist-pig').parent(),
			pigContainerOpacity = 0.5;
		
		$('.colors input')
			.bind('click', function() {
				
				if($(this).hasClass('censor')) {
					if(pigContainer.find('.blackout').length <= 0) {
						pigContainer
							.append('<span class="blackout">This Image Has Been Censored For Your Protection')
							.find('.blackout');
					} else {
						pigContainer
							.find('.blackout')
							.remove();
					}
				} else if($(this).hasClass('censor-opacity')) {
					if(pigContainer.find('.blackout').length === 1 && pigContainer.find('.blackout').css('opacity') !== pigContainerOpacity) {
						pigContainer
							.find('.blackout')
							.css({
								'opacity': pigContainerOpacity,
								'background': '#000'
							})
							.text('The image below is intended for mature audiences');
					}
				} else if($(this).hasClass('rgba')) {
					if(pigContainer.find('.blackout').length === 1) {
						pigContainer
							.find('.blackout')
							.css({
								'opacity': 1,
								'background': 'rgba(0, 0, 0, .5)'
							})
							.text('This warning is brought to you in rgba');
					}
				} else if($(this).hasClass('hsla')) {
					if(pigContainer.find('.blackout').length === 1) {
						pigContainer
							.find('.blackout')
							.css({
								'opacity': 1,
								'background': 'hsla(0, 0%, 0%, 0.5)'
							})
							.text('This warning is brought to you in hsla');
					}
				} else if($(this).hasClass('hex-opacity')) {
					if(pigContainer.find('.blackout').length === 1) {
						pigContainer
							.find('.blackout')
							.css({
								'opacity': pigContainerOpacity,
								'background': '#000'
							})
							.text('This warning is brought to you in hex & opacity');
					}
				}
				
				
			});
	}
	
	// Shadows Page
	if($('body').hasClass('shadows')) {
		$('.toggle-shadows')
			.bind('click', function() {
				if($('#main').hasClass('shadow')) {
					$('#main')
						.removeClass('shadow')
						.addClass('no-shadow');
				} else {
					$('#main')
						.addClass('shadow')
						.removeClass('no-shadow');
				}
			});
		$('.toggle-vibrant-shadows')
			.bind('click', function() {
				$('#main')
					.toggleClass('vibrant-shadow');
			});
	}
	
	// Backgrounds Page
	if($('body').hasClass('backgrounds')) {
		
		// Gradients
		$('.toggle-gradient')
			.bind('click', function() {
				if($('#main').hasClass('gradient')) {
					$('#main')
						.removeClass('gradient')
						.addClass('no-gradient');
				} else {
					$('#main')
						.addClass('gradient')
						.removeClass('no-gradient');
				}
			});
		$('.toggle-vibrant-gradient')
			.bind('click', function() {
				$('#main')
					.toggleClass('vibrant-gradient');
			});
			
		// Background Size
		$('.toggle-full-background')
			.bind('click', function() {
				$('body')
					.toggleClass('full-background');
			});
		$('.toggle-scaled-background')
			.bind('click', function() {
				$('body')
					.toggleClass('scaled-background');
			});
			
		// Multiple Backgrounds	

		$('.toggle-background-1')
			.bind('click', function() {
				$('body')
					.toggleClass('background-2');
			});
		$('.toggle-background-2')
			.bind('click', function() {
				$('body')
					.toggleClass('background-3');
			});
		$('.toggle-background-3')
			.bind('click', function() {
				$('body')
					.toggleClass('background-4');
			});
		$('.toggle-background-4')
			.bind('click', function() {
				$('body')
					.toggleClass('background-5');
			});
			// toggle-scaled-background-1
	}
	
});