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
    dots: true
  })

  $('<li class="arrow-slider-first"></li>').prependTo('.slick-dots');
  $('.slick-prev').prependTo('.arrow-slider-first');

  $('<li class="arrow-slider"></li>').appendTo('.slick-dots');
  $('.slick-next').appendTo('.arrow-slider');


  $('.reviews__inner').css('display','flex');




  var Mixer = mixitup( '.range__content' );
});