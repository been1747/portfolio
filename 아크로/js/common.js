$(document).ready(function(){

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


    $('.btn').click(function(){
        $('.play').animate({
            left:'0'
        });
    });

    $('.close').click(function(){
        $('.play').animate({
            left:'100%'
        });
    });


        //popup
        $('.popup_close').click(function(){
            $('.popup').slideUp();
        });

    //메인슬라이드
    $('.slide').slick({
        autoplay: true,
        dots: true,
        arrows: false
        });



});