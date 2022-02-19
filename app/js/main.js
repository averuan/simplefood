$(function () {


//Звездный рейтинг заполненный
  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c14d",
    ratedlFill: "#ffb800",
    readOnly: true,
  });

  //Звездный рейтинг пустой
  $(".star-empty").rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedlFill: "#ffb800",
  });

  //Стилизация селектов
  $('.select-style, .product-one__input').styler();

  //Активные классы табам из страницы товара
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  //Фиксированный хэдер при скролле
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
    var id = $(this).attr('href'),

      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
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
  const filterButton = document.querySelector('.filter-button');
  const filterSidebar = document.querySelector('.filter-sidebar');

  document.onclick = function (e) {
    if (!(e.target.classList.contains('sidebar')) && !(e.target.classList.contains('burger'))) {
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


 // document.onclick = function (e) {
 //   if (!(e.target.classList.contains('filter-sidebar')) && !(e.target.classList.contains('filter-button'))) {
 //     filterButton.classList.remove('filter-button--active');
 //     filterSidebar.classList.remove('filter-sidebar--active');
  //    body.classList.remove('lock');
 //     overlay.classList.remove('overlay--active');
 //   }
 // }



  //События при клике на бургер - активация затемняющего слоя, класса .lock у body, активация сайдбара, наполнение сайдбара контентом
  

  $('.filter-button').on('click', function (e) {
    $('.overlay').addClass('overlay--active-filter');
    $('.catalog__filtres').addClass('catalog__filtres--active');
    $('body').addClass('lock-filter');
    $('.close-btn').removeClass('close-btn--hidden');
    $('.close-btn').addClass('close-btn--filter');
  });

    $('.close-btn').on('click', function (e) {
    $('.overlay').removeClass('overlay--active-filter');
    $('.catalog__filtres').removeClass('catalog__filtres--active');
    $('body').removeClass('lock-filter');
    $('.close-btn').addClass('close-btn--hidden');
    $('.close-btn').removeClass('close-btn--filter');
  });






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




var catalogSlider = null;
var mediaQuerySize = 768;

function catalogSliderInit () {
  if (!catalogSlider) {
    catalogSlider = new Swiper('.restaurant__list', {
      direction: 'horizontal',
      slideClass: 'restaurant__item',
      loop: true,
      //simulateTouch: true,
      slidesPerView: 1,
      spaceBetween: 10,
    });
  }
}

function catalogSliderDestroy () {
  if (catalogSlider) {
    catalogSlider.destroy();
    catalogSlider = null;
  }
}

$(window).on('load resize', function () {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();
  
  // Если ширина экрана меньше или равна mediaQuerySize(1024)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    catalogSliderInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    catalogSliderDestroy()
  }
});













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
  const discountsSwiper = new Swiper('.discounts__slider', {

    direction: 'horizontal',
    //slideClass: 'discounts__item',
    //loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-dots',
      clickable: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 2,
      },
    },

    //navigation: {
     // nextEl: '.swiper-button-next',
     // prevEl: '.swiper-button-prev',
    //},

    //scrollbar: {
    //  el: '.swiper-scrollbar',
    // },
  });

  const productOneSwiper = new Swiper('.product-one__slider', {

    direction: 'horizontal',
    //slideClass: 'discounts__item',
    //loop: true,
    slidesPerView: 1,
    //slideClass: 'product__item',

    //pagination: {
     // el: '.swiper-dots',
    //  clickable: true,
    //},

    //navigation: {
    //  nextEl: '.swiper-button-next',
   //   prevEl: '.swiper-button-prev',
    //},

    

    //navigation: {
     // nextEl: '.swiper-button-next',
     // prevEl: '.swiper-button-prev',
    //},

    //scrollbar: {
    //  el: '.swiper-scrollbar',
    // },
  });



    //Слайдер видов продукции из страницы product
  const productSwiper = new Swiper('.product__slider', {

    direction: 'horizontal',
    //slideClass: 'discounts__item',
    //loop: true,
    slidesPerView: 1,
    //slideClass: 'product__item',

    pagination: {
      el: '.swiper-dots',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

      1200: {
        slidesPerView: 5,
      },

      992: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 2,
      },
    },

    //navigation: {
     // nextEl: '.swiper-button-next',
     // prevEl: '.swiper-button-prev',
    //},

    //scrollbar: {
    //  el: '.swiper-scrollbar',
    // },
  });






  //mixitup блоку ассортимента главной страницы
  var Mixer = mixitup('.range__content');
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

function updateInputs(data) {
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

$('.rev-prev').prependTo('.reviews__management');
  $('.rev-next').appendTo('.reviews__management');