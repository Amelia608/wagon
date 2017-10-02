$(window).bind('load  resize', function() {
	// 右侧24h热门资讯，热门话题模块的高度计算及文字滚动
	var leftH = $('.news-viw').outerHeight();
	var leftH2 = $('.row-qa-box').outerHeight();
	var winWidth = $(window).outerWidth();
	if(winWidth > 768) {
		$('#parent_24h ').css({
			'height': leftH + 'px'
		});
		$('#hot-topic').css({
			'height': leftH2 + 'px'
		});
	}

	// 初始化banner模块中的swiper轮播组件
	var banner_swiper = new Swiper('.banner .swiper-container', {
		pagination: '.banner .swiper-pagination',
		nextButton: '.banner .swiper-button-next',
		prevButton: '.banner .swiper-button-prev',
		paginationClickable: true,
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: 3500,
		loop: true,
		autoplayDisableOnInteraction: false
	});
})

//文字滚动
function autoScroll(obj) {
	var h = $(obj).find("ul").find('li:first').outerHeight();
	$(obj).find("ul").animate({
		marginTop: "-" + h + "px"
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		}).find("li:first").appendTo(this);
	})
}
$(function() {
	toTop();//回到顶部
	var winWidth = $(window).outerWidth();
	//大屏幕下热门资讯和热门话题是固定高度，滚动
	if(winWidth > 768) {
		var timer1 = setInterval('autoScroll("#information-box")', 2500);
		var timer2 = setInterval('autoScroll("#parent")', 2500);
	}
	$("#information-box").hover(
		function() {
			clearInterval(timer1);
		},
		function() {
			timer1 = setInterval('autoScroll("#information-box")', 2500);
		}
	);
	$("#parent").hover(
		function() {
			clearInterval(timer2);
		},
		function() {
			timer2 = setInterval('autoScroll("#parent")', 2500);
		}
	);

})