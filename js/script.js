$(function () {
    'use strict';
    $('html').niceScroll({
        cursorcolor: '#636e72',
        cursorwidth: 15,
        cursorborderradius: 5,
        zindex: 11111
    });
    var o = $('#scroll-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $("#scroll-top").show(100);
        } else {
            $("#scroll-top").hide(100);
        }
    });

    $("#scroll-top").click(function () {
        $('body,html').animate({
            scrollTop: 200
        }, 1000);
    })
});