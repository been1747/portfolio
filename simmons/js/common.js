$(document).ready(function(){

    $('.mgnb_wrap').hide();
    $('.ham').click(function(){
        $('.mgnb_wrap').fadeIn();
    });
    $('.close').click(function(){
        $('.mgnb_wrap').fadeOut();
    });



    $('.mvslide').slick({
        fade: true,
        autoplay: true,
        dots: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
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
  


    $('.kenosha_list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
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


      $('.youtube').hide();
      $('#video .btn').click(function(){
          $('.youtube').fadeIn();
      });
      $('.close_btn').click(function(){
          $('.youtube').fadeOut();
      });



      $('.list_txt').hide();
      $('.best_list li').mouseenter(function(){
          $(this).children('.list_txt').fadeIn(500);
      });
      $('.best_list li').mouseleave(function(){
        $('.list_txt').fadeOut(500);
    });

});