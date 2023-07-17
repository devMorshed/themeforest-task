(function ($) {
	"use strict";

	$(document).ready(function () {
		$(".owl-carousel").owlCarousel({
			animateOut: "slideOutDown",
			items: 1,
			loop: true,
			responsiveClass: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		});
	});
})(jQuery);

