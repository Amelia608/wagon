// JavaScript Document
(function($) {
	$.fn.myScroll = function(options) {
		//默认配置
		var defaults = {
			speed: 40, //滚动速度,值越大速度越慢
			rowHeight: 24 //每行的高度
		};

		var opts = $.extend({}, defaults, options),
			intId = [];
		console.log(111);

		function marquee(obj, step) {
			console.log(111);
			obj.find("ul").animate({
				marginTop: '-=1'
			}, 0, function() {
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if (s >= step) {
					console.log(s);
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		console.log(this);
		this.each(function(i) {
			console.log(i);
			var sh = opts["rowHeight"],
				speed = opts["speed"],
				_this = $(this);
			intId[i] = setInterval(function() {
				if (_this.find("ul").height() <= _this.height()) {
					clearInterval(intId[i]);
				} else {
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function() {
				clearInterval(intId[i]);
			}, function() {
				intId[i] = setInterval(function() {
					if (_this.find("ul").height() <= _this.height()) {
						clearInterval(intId[i]);
					} else {
						marquee(_this, sh);
					}
				}, speed);
			});

		});

	}

})(jQuery);