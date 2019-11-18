$(window).on('load resize', function() {
		if ($(window).width() < 820) {

		} else {
			$('.footer_bottom_menu ul').css( "display", "block" );
			$('.footer_bottom_menu').removeClass('accordion-menu');
			$( ".footer_bottom_menu" ).removeAttr( "data-accordion-menu" );
			$( ".footer_bottom_menu" ).removeAttr( "data-responsive-menu" );
		}
});
$(function() {
	$(".add_cart").click(function() {
		$(this).addClass("added");
	});
});
jQuery(document).ready(function(){
	$('[data-quantity="plus"]').on("click",function(e){
				// Stop acting like a button
				e.preventDefault();
				// Get the field name
				fieldName = $(this).attr('data-field');
				// Get its current value
				var currentVal = parseInt($('input[name='+fieldName+']').val());
				// If is not undefined
				if (!isNaN(currentVal)) {
						// Increment
						$('input[name='+fieldName+']').val(currentVal + 1);
				} else {
						// Otherwise put a 0 there
						$('input[name='+fieldName+']').val(0);
				}
				if (currentVal == 0) {
			$(this).parents(".plus-minus-input").find(".minus").removeClass("disabled");
				}
		});
		// This button will decrement the value till 0
		$('[data-quantity="minus"]').click(function(e) {
				// Stop acting like a button
				e.preventDefault();
				// Get the field name
				fieldName = $(this).attr('data-field');
				// Get its current value
				var currentVal = parseInt($('input[name='+fieldName+']').val());


				if (currentVal == 1) {
			$(".minus").addClass("disabled");
				}
				// If it isn't undefined or its greater than 0
				if (!isNaN(currentVal) && currentVal > 1) {
						// Decrement one
						$('input[name='+fieldName+']').val(currentVal - 1);
				} else {
						// Otherwise put a 0 there
						$('input[name='+fieldName+']').val(0);
				}
		});
});
$('img[src$=".svg"]').each(function() {
		var $img = jQuery(this);
		var imgURL = $img.attr('src');
		var attributes = $img.prop("attributes");

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Remove any invalid XML tags
			$svg = $svg.removeAttr('xmlns:a');

			// Loop through IMG attributes and apply on SVG
			$.each(attributes, function() {
				$svg.attr(this.name, this.value);
			});

			// Replace IMG with SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
	jQuery(function($){
		$("#phone").mask("+7 (999) 999-9999");
	});
	$('#header_catalog_menu').on('show.zf.dropdown', function() {
		$('.main_inner').addClass('shadow');
	});
	$('#header_catalog_menu').on('hide.zf.dropdown', function() {
		$('.main_inner').removeClass('shadow');
	});
