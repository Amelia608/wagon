/*回到顶部*/
function toTop() {
	$(".to-top").click(function() {
		//$('body,html').animate({scrollTop:0},1000);  
		if($('html').scrollTop()) {
			$('html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		}
		$('body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		var delever = $(this).outerHeight() * 0.8;
		if(scrollTop > delever) {
			$('.to-top-li').fadeIn(500);
		} else {
			$('.to-top-li').fadeOut(500);
		}
	});
}