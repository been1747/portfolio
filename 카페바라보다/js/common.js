$(document).ready(function(){

    

    $('.depth2').hide();
    $('.gnb>li').mouseenter(function(){
      $(this).children('.depth2').stop().fadeIn();
    });
    $('.gnb>li').mouseleave(function(){
      $(this).children('.depth2').stop().fadeOut();
    });

        //상단고정
        $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
              $("#header").addClass('fix');
          } else {
              $("#header").removeClass('fixs');
          }
      });


    $('.mgnb_wrap').hide();
    $('.ham').click(function(){
        $('.mgnb_wrap,.mgnb_bg').fadeIn();
    });
    $('.close').click(function(){
        $('.mgnb_wrap,.mgnb_bg').fadeOut();
    });



    $('.mdepth2').hide();
    $('.mgnb>li').click(function(){
      $(this).children('.mdepth2').slideDown();
      $(this).siblings().children('.mdepth2').slideUp();
    });



    //메인비주얼
    $('.visual').slick({
        fade: true,
        autoplay: true,
        dots: true,
        arrows: false
    });
    

    $('.product').slick({
        centerMode: true,
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            centerMode: true,
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              dots: false
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });













});