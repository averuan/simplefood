$(function(){

//Фиксированный хэдер при скролле
  $('.select-style').styler();
  
  $(window).scroll(function () {

    if ($(this).scrollTop() >= 25) {
      $(".header").addClass("header--fix");
    } else {
      $(".header").removeClass("header--fix");
    }
  });


  //Активный класс ссылкам меню
  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });


  //Навигация по странице при клике на ссылки
  $(".header__inner a, .hero__content a, footer a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
 
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });


//устанавливает высоту в зависимости от ширины
 // $(function () {
   // $('.hero__img').height($('.hero__img').width() / 1.179);
  //  $(window).resize(function () {
  //    $('.hero__img').height($('.hero__img').width() / 0.85);
  //  });
 // });


//Добавляет слой-затемнение в DOM
  $('<div class="overlay"></div>').prependTo('body');


//Функция отключения Сайдбара по клику в любом месте страницы
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  document.onclick = function(e) {
    if(!(e.target.classList.contains('sidebar')) && !(e.target.classList.contains('burger'))) {
      burger.classList.remove('burger--active');
      sidebar.classList.remove('sidebar--active');
      body.classList.remove('lock');
      menu.classList.remove('menu--active');
      overlay.classList.remove('overlay--active');
    }
  }


//События при клике на бургер - активация затемняющего слоя, класса .lock у body, активация сайдбара, наполнение сайдбара контентом
  $('.burger').on('click', function (e) {
    $('.overlay').toggleClass('overlay--active');
    $('.burger').toggleClass('burger--active');
    $('.sidebar').toggleClass('sidebar--active');
    $('body').toggleClass('lock');
    $('.menu').toggleClass('menu--active');
    $('.sidebar__control').empty();
    $('.logo--top').clone().prependTo('.sidebar__control');
    $('<button class="close-btn"></button>').appendTo('.sidebar__control');
    $('.close-btn').attr('type', 'button');
    $('<span class="visually-hidden sidebar-close-description"></span>').appendTo('.close-btn');
    $(".sidebar-close-description").text("закрыть меню");
    $('.sidebar__contacts').empty();
    $('.contacts').clone().prependTo('.sidebar__contacts');
  });



  if (screen.width <= 992) {
    $('.restaurant__list').slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1
    });
  }



  //$('.restaurant__list').slick({
 // responsive: [
   // {
  //    breakpoint: 1200,
   //   settings: "unslick"
  //  },
  //  {
  //    breakpoint: 992,
  //    settings: {
   //     slidesToShow: 2,
   //     slidesToScroll: 2
   //   }
  //  },
 // ]
  //});


  


 
//Слайдер-swiper
  const swiper = new Swiper('.reviews__slider', {

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //scrollbar: {
    //  el: '.swiper-scrollbar',
   // },
  });


//Автоматический слайдер скидок из страницы catalog
  $('.discounts__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    rows: 0,
  });


//mixitup блоку ассортимента главной страницы
  var Mixer = mixitup( '.range__content' );
});


//Фильтры из страницы каталога
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