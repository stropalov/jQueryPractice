$(window).scroll(function (e) {
	var scr = $(this).scrollTop();
	$('.bg').css('top', -(scr * 0.1) + 'px');
});