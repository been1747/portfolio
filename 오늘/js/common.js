$(document).ready(function(){


    //스크롤 트리거
$(window).scroll(function () {
    $('.ani_stop').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
            $(this).removeClass('ani_stop');
        }
        if (bottom_of_window < bottom_of_object) {
            $(this).addClass('ani_stop');
        }
    });
});

    
    //메인슬라이드
    $('.mv').slick({
        autoplay: true,
        dots: true
    });


    $('.ham').click(function(){
        $('.mgnb_wrap').animate({
            left:'0'
        });
    });

    $('.mgnb_close').click(function(){
        $('.mgnb_wrap').animate({
            left:'100%'
        });
    });




    $('#room ul li:nth-child(1)').addClass('active');
    $('#room ul li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });



});