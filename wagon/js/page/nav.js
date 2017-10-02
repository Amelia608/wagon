$(function() {
    /**btn-menu toggle**/
    $('#btn-menu').click(function() {
        $('body').toggleClass('pushed-left');
    })

    /**菜单item点击事件  添加selected**/
    $('.menu-ul>li>a').click(function(e) {
        e.preventDefault();
        $(this).addClass('selected').toggleClass('in').parent().siblings().find('a').removeClass('selected');
    })

    $(window).bind('load resize', function() {
        var $win_width = $(this).width();
        if ($win_width >= 768) {
            $('body').removeClass('pushed-left');
        }
    })

})