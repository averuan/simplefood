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
    prevArrow: "<div class='prev'></div>",
    nextArrow: "<div class='next'></div>",
  });


  $('<div class="slider-management"></div>').appendTo('.slider');
  $('.slick-dots').appendTo('.slider-management');
  $('.prev').prependTo('.slider-management');
  $('.next').appendTo('.slider-management');

  $('.discounts__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    rows: 0,
  });








  //$('<div class="arrow-slider-first"></div>').prependTo('.slick-dots');
  //$('.slick-prev').prependTo('.arrow-slider-first');

  //$('<div class="arrow-slider"></div>').appendTo('.slick-dots');
  //$('.slick-next').appendTo('.arrow-slider');


  $('.reviews__inner').css('display','flex');




  var Mixer = mixitup( '.range__content' );
});