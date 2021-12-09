$(function(){
  
  $(window).scroll(function () {

    if ($(this).scrollTop() >= 90) {
      $(".header").addClass("header--fix");
    } else {
      $(".header").removeClass("header--fix");
    }
  });
  

  
  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });


  
  $('.slider').slick({
    dots: true,
    arrows: true,
    prevArrow: "<img src='https://svgshare.com/i/6Ei.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../images/sprite.svg#reviews-slider--next-arrow-slideer' class='next' alt='2'>"
  })

  //$('<div class="arrow-slider-first"></div>').prependTo('.slick-dots');
  //$('.slick-prev').prependTo('.arrow-slider-first');

  //$('<div class="arrow-slider"></div>').appendTo('.slick-dots');
  //$('.slick-next').appendTo('.arrow-slider');


  $('.reviews__inner').css('display','flex');




  var Mixer = mixitup( '.range__content' );
});