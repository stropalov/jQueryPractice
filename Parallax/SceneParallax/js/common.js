$(window).on('mousemove', function (e) {
	var h = $(this).height(),
		w = $(this).width(),
		offsetX = 0.5 - e.pageX / w,
		offsetY = 0.5 - e.pageY / h;

	$(".parallax").each(function (i, el) {
		var offset = parseInt($(el).data('offset')),
			translate = "translate3d(" +
			Math.round(offsetX * offset) + "px," +
			Math.round(offsetY * offset) + "px, 0px)";

		$(el).css({
			'-webkit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

	});

});