$(function(){

  $('.select-style').styler();
  
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

    $(".header__inner a, .hero__content a, footer a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
 
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });





  $('<div class="sidebar"></div>').appendTo('.header');
  $('<div class="sidebar__control"></div>').prependTo('.sidebar');
  $('<div class="sidebar__nav"></div>').appendTo('.sidebar');


  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar')

  document.onclick = function(e) {
    if(!(e.target.classList.contains('sidebar')) && !(e.target.classList.contains('burger'))) {
        burger.classList.remove('burger--active');
        sidebar.classList.remove('sidebar--active');
    }
  }


  $('.burger').on('click', function (e) {
  $('.burger').toggleClass('burger--active');
  $('.sidebar').toggleClass('sidebar--active');
  $('.sidebar__control').empty();

  $('.logo--top').clone().prependTo('.sidebar__control');
  //$('.close-btn').addClass('close-btn--active');
//меню

  $('<button class="close-btn"></button>').appendTo('.sidebar__control');
  $('.close-btn').attr('type', 'button');
  $('<span class="visually-hidden sidebar-close-description"></span>').appendTo('.close-btn');
  $(".sidebar-close-description").text("закрыть меню");


  $('.line').addClass('.line--silver-darker');
  //$('.close-btn').appendTo('.sidebar__control');
  $('.menu').appendTo('.sidebar');
  $('.menu').toggleClass('menu--active');
    //$('body').toggleClass('lock');

    //$('.contacts').appendTo('.sidebar');
    $('.sidebar').removeClass('.contacts');
  $('.contacts').clone().appendTo('.sidebar');
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



var $range = $(".filter-price__input"),
    $inputFrom = $(".filter-price__from"),
    $inputTo = $(".filter-price__to"),
    instance,
    min = 0,
    max = 99999,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    //min: min,
    //max: max,
    //from: 200,
    //to: 800,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});