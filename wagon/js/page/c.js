var speed = 3500;
$(window).bind('load  resize', function() {
    // 右侧24h热门资讯，热门话题模块的高度计算及文字滚动
    var leftH = $('.news-and-circle').outerHeight() - $('.row-24hhot-topic ').outerHeight();
    var leftH2 = $('.qa-content').outerHeight();
    $('.topic-24hhot-view').css({
        'height': leftH + 'px'
    });
    $('.hot-topic-view').css({
        'height': leftH2 + 'px'
    });
    var sp1 = $('.topic-24hhot-view-item').outerHeight();
    var sp2 = $('.hot-topic-view-item').outerHeight();
    // scroll('parent_24h', 'parent_24h_chd1 ', 'parent_24h_chd2', sp1);
    scroll('parent_24h', 'parent_24h_chd1 ', 'parent_24h_chd2');
    // scroll('parent-hot', 'parent-hot-chd1', 'parent-hot-chd2', sp2);

    // 初始化banner模块中的swiper轮播组件
    var banner_swiper = new Swiper('.banner .swiper-container', {
        pagination: '.banner .swiper-pagination',
        nextButton: '.banner .swiper-button-next',
        prevButton: '.banner .swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3500,
        loop: true,
        autoplayDisableOnInteraction: false
    });
})


/*文字上下滚动*/
function scroll(parent, chld1, chld2) {
    var demo = document.getElementById(parent);
    var demo2 = document.getElementById(chld2);
    var demo1 = document.getElementById(chld1);
    demo2.innerHTML = demo1.innerHTML;

    function Marquee() {
        if (demo.scrollTop >= demo1.offsetHeight) {
            demo.scrollTop = 0;
        } else {
            demo.scrollTop = demo.scrollTop + 1;
        }
    }
    var MyMar = setInterval(Marquee, speed)
    demo.onmouseover = function() {
        clearInterval(MyMar)
    }
    demo.onmouseout = function() {
        MyMar = setInterval(Marquee, speed)
    }
}
$(function() {

})