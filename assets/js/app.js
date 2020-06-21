$(window).scroll(function() {
    var eScroll = $(window).scrollTop();

    if (eScroll >= 300) {
        $('.fixed-top .nav-scroller').addClass('bx-shadow');
    } else {
        $('.fixed-top .nav-scroller').removeClass('bx-shadow');
    }
});