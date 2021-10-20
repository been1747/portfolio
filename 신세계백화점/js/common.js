$(document).ready(function(){

    //메인슬라이드
    $('.ms').slick({
        autoplay: true,
        dots: true
    });


    //검색토글
    $('.search_box').hide();
    $('.btn_search').click(function(){
        $('.btn_search a').toggleClass('on');
        $('.search_box').fadeToggle();
    });

    //event
       $('.event_list').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });



    //.tab안에 h3에 클릭했을때
    //.tab안에 li에 active클래스 추가
    //클릭한 형제요소에 active클래스 제거

    $('.tab>li:nth-child(1)').addClass('active');
    $('.tab>li>h3').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });



    //art
    $('.art_list').slick({
        autoplay: true,
        dots: true,
        fade: true
    });




});