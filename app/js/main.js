$(function(){
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