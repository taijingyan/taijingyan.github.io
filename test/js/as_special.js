$(window).scroll(function () {
	var scrolled = $(document).scrollTop();
	var winh = $(window).height();
	$(".opa").each(function () {
		var opRange = $(this).parent().height() / 5;
		$(this).css({
			opacity: ($(this).data("seq") * opRange - scrolled) / opRange
		});
	});

	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	}

	$(".maploc").each(function () {
		var thispos = $(this).offset().top;
		var thish = $(this).height();
		if (scrolled >= thispos && scrolled < thispos + thish) {
			$("#bg-img").css({
				transform: "translate(" +
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