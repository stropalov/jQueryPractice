var time = 2, counter = 1;
$(window).scroll(function () {
	$('#counter').each(function () {
		var cPos = $(this).offset().top,
			topWindow = $(window).scrollTop();
		if (cPos < topWindow + 200 && counter < 2) {
			$('div').each(function () {
				var
					i = 1,
					num = $(this).data('num'),
					step = 1000 * time / num,
					that = $(this),
					int = setInterval(function () {
						if (i <= num) {
							that.html(i);
						} else {
							counter += 5;
							clearInterval(int);
						}
						i++;
					}, step);
			});
		}
	});
});