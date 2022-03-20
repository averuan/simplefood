$(function () {



  

  





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


  //События при клике на кнопку-фильтер - активация затемняющего слоя, класса .lock-filter у body, активация фильтра в мобильном меню, наполнение фильтра контентом
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


  $('.btn--search').on('click', function (e) {
    $('.search__inner').toggleClass('search__inner--active');
    $('.search__input').toggleClass('search__input--active');

    //$("input[type='text']").focus();
  });

  // Вызов слайдера ресторанов (главная страница) в мобильной версии
  const catalogSlider = null;
  const mediaQuerySize = 768;

  $(document).ready(function () {
    function checkWidth() {
      var windowMainWidth = $('body').innerWidth(),
        elem = $(".restaurant__item"); 
      if (windowMainWidth < 769) {

        elem.addClass('swiper-slide');
      }
      else {
        elem.removeClass('swiper-slide');

      }
    }

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
    });
  });

  function catalogSliderInit () {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.restaurant__list', {
        direction: 'horizontal',
        slideClass: 'restaurant__item',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
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


  //Слайдер-ревью (главная страница)
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
  });


  //Автоматический слайдер скидок из страницы catalog
  const discountsSwiper = new Swiper('.discounts__slider', {

    direction: 'horizontal',
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
  });

  //Слайдер продукта (с увеличением по клику) со страницы продукта
  const productOneSwiper = new Swiper('.product-one__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    loop: true,
  });

    $('.product-one__slider .product-one__slide-item').on('click', function () {
      var slideId = $(this).attr('id');
      openFullscreenSwiper(slideId);
    });

    function openFullscreenSwiper(initialSlideNumber) {
      var mainSwiperMarkup = $('.product-one__slider').html();

      $('#fullscreen-swiper')
        .append(mainSwiperMarkup + "<button id='fullscreen-swiper-close'></button>")
        .fadeIn();

      const fullscreenSwiper = new Swiper('#fullscreen-swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 10,
        loop: true,
        initialSlide: initialSlideNumber - 1,
      });

      $('#fullscreen-swiper-backdrop').fadeIn();
      $('body, html').addClass('no-scroll');

      $('#fullscreen-swiper-close').on('click', function () {
        $('#fullscreen-swiper').hide().empty();
        $('#fullscreen-swiper-backdrop').fadeOut();
        $('body, html').removeClass('no-scroll');
      });
    };


  //Слайдер видов продукции из страницы product
  const productSwiper = new Swiper('.product__slider', {

    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 5,
    slidesPerGroup: 2,
    slideClass: 'product__item',

    pagination: {
      el: '.swiper-dots',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

      1201: {
        slidesPerView: 5,
        spaceBetween: 30,
      },

      993: {
        slidesPerView: 4,
        spaceBetween: 25,
      },

      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      577: {
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
    },
  });


  //mixitup блоку ассортимента главной страницы
  const Mixer = mixitup('.range__content');
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


  
  