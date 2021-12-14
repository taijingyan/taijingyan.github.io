$(document).ready(function () {
	$(window).scroll(function () {
		var max_scroll = $(document).height() - $(window).height();
		var max_w = $("#horizontal").width() - $(window).width();
		var current_pos = $(window).scrollTop();
		console.log(current_pos);

		var new_left = (-1 * max_w * current_pos) / max_scroll;
		$("#horizontal").css({
			left: new_left
		});
	});
});

$(window).scroll(function () {
	var scrolled = $(document).scrollTop();
	var winh = $(window).height();
	$(".opa").each(function () {
		var opRange = $(this).parent().height() / 5;
		$(this).css({
			opacity: ($(this).data("seq") * opRange - scrolled) / opRange
		});
	});

	$(".maploc").each(function () {
		var thispos = $(this).offset().top;
		var thish = $(this).height();
		if (scrolled >= thispos && scrolled < thispos + thish) {
			$("#bg-img").css({
				transform:
					"translate(" +
					$(this).data("x") +
					", " +
					$(this).data("y") +
					") scale(" +
					$(this).data("scale") +
					")"
			});
		}
	});
	if (
		scrolled < $("#mapmove").offset().top ||
		scrolled > $("#mapmove").offset().top + $("#mapmove").height()
	) {
		$("#bg-img").css({
			transform: "translate(0%, 0%) scale(1)"
		});
	}
});

