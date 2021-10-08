$(document).ready(function(){



    //맨위로 가기
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });
        
    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    
    
    
    
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


    //gnb
    $('.dp2').hide();

    $('.gnb>li').mouseenter(function(){
        $('.dp2').stop().slideDown();
    });

    $('.gnb>li').mouseleave(function(){
        $('.dp2').stop().slideUp();
    });



    //메인슬라이드
    $('.banner').slick({
        autoplay: true,
        dots: true
    });


    //facilty
    $('.facilty_list').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });





});