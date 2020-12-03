$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7 (999) 999 - 99 - 99");


  // показываем скрытый контент по клику на заголовок
  const slideContent = (caption, content, chevron) => {
    $(caption).on('click', function () {
      if (chevron) {
        $(this).find(chevron).toggleClass('open');
      }
      $(this).next(content).fadeToggle();
    })
  };
  // в карточке застройщика
  slideContent('.building__rooms-caption', '.building__rooms-content', '.building__rooms-chevron');
  // в подвале
  slideContent('.footer-category__caption', '.footer-category__menu', '.footer-category__chevron');
  // в частозадаваемых вопросах
  slideContent('.question__caption', '.question__content', '.question__chevron');
  // для точек на карте
  slideContent('.map-points__caption', '.map-points__content', '.map-points__chevron');
  // для комнат
  slideContent('.room-item__caption', '.room-item__content');


  // слайдер застройщики
  $('.developers-slider').slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    dots: false,
    arrows: true,
    prevArrow: '<div class="slick-prev slick-arrow">' +
      '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M2.82823 5.00002L5.65723 2.17202L4.24323 0.757019L0.000226974 5.00002L4.24323 9.24302L5.65723 7.82802L2.82823 5.00002Z" fill="black"/>\n' +
      '</svg></div>',
    nextArrow: '<div class="slick-next slick-arrow">' +
      '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M3.17177 5.00002L0.342773 2.17202L1.75677 0.757019L5.99977 5.00002L1.75677 9.24302L0.342773 7.82802L3.17177 5.00002Z" fill="black"/>\n' +
      '</svg></div>',

    responsive: [
      {
        breakpoint: 1266,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
  // слайдер услуги
  $('.services-slider').slick({
    slidesToScroll: 6,
    slidesToShow: 6,
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: '<div class="slick-prev slick-arrow">' +
      '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M2.82823 5.00002L5.65723 2.17202L4.24323 0.757019L0.000226974 5.00002L4.24323 9.24302L5.65723 7.82802L2.82823 5.00002Z" fill="black"/>\n' +
      '</svg></div>',
    nextArrow: '<div class="slick-next slick-arrow">' +
      '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M3.17177 5.00002L0.342773 2.17202L1.75677 0.757019L5.99977 5.00002L1.75677 9.24302L0.342773 7.82802L3.17177 5.00002Z" fill="black"/>\n' +
      '</svg></div>',

    responsive: [
      {
        breakpoint: 1266,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  //слайдер фото в карточках
  const buildingCarousel = () => {
    $('.building').find('.building-carousel').each(function () {
      $(this).slick({
        lazyLoad: 'ondemand',
        infinite: false,
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick-prev slick-arrow">' +
          '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M2.82823 5.00002L5.65723 2.17202L4.24323 0.757019L0.000226974 5.00002L4.24323 9.24302L5.65723 7.82802L2.82823 5.00002Z" fill="white"/>\n' +
          '</svg></div>',
        nextArrow: '<div class="slick-next slick-arrow">' +
          '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M3.17177 5.00002L0.342773 2.17202L1.75677 0.757019L5.99977 5.00002L1.75677 9.24302L0.342773 7.82802L3.17177 5.00002Z" fill="white"/>\n' +
          '</svg></div>'
      });

      $(this).on('afterChange', function (event, slick, currentSlide, nextSlide) {

        if (currentSlide === slick.slideCount - 1) {
          $(this).closest('.building').find('.building__slide-fix').css({
            'display': 'none'
          });
          $(this).closest('.building').find('.building__achievements').css({
            'display': 'none'
          });
        } else {
          $(this).closest('.building').find('.building__slide-fix').css({
            'display': 'block'
          });
          $(this).closest('.building').find('.building__achievements').css({
            'display': 'flex'
          });
        }

        // console.log();

      });

    });
  };
  buildingCarousel();


  // универсальная функция для одиночных слайдеров
  const singleSlider = (sliderSelector) => {
    $(sliderSelector).each(function () {
      $(this).slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        prevArrow: '<div class="slick-prev slick-arrow">' +
          '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M2.82823 5.00002L5.65723 2.17202L4.24323 0.757019L0.000226974 5.00002L4.24323 9.24302L5.65723 7.82802L2.82823 5.00002Z" fill="black"/>\n' +
          '</svg></div>',
        nextArrow: '<div class="slick-next slick-arrow">' +
          '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M3.17177 5.00002L0.342773 2.17202L1.75677 0.757019L5.99977 5.00002L1.75677 9.24302L0.342773 7.82802L3.17177 5.00002Z" fill="black"/>\n' +
          '</svg></div>',
        infinite: false
      })
    });
  };
  // слайдер консультантов
  singleSlider('.consult-block__slider');

  // слайдер статистики
  singleSlider('.statistic-slider');
  // главная карусель на странице объекта
  singleSlider('.carousel-full');

  // добавление слайда с контактами на мобильном разрешении
  const addSlideContacts = () => {
    // медиа запрос
    const mql = window.matchMedia('all and (max-width: 767.5px');

    const slideContacts = '<div class="carousel-full__plates">\n' +
      '            <div class="carousel-full__plates-inner flex flex-wrap w-full h-full">\n' +
      '                <div class="carousel-full__plate relative w-full z-20">\n' +
      '                    <div class="flex h-full flex-col">\n' +
      '                        <div class="flex items-center justify-center bg-green flex-grow hover-effect call hover-effect cursor-pointer">\n' +
      '                            <div class="flex items-center">\n' +
      '                                <div class="flex flex-shrink-0 w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-white items-center justify-center mr-2 lg:mr-4">\n' +
      '                                    <svg width="12" height="12" class="h-4 w-4 lg:w-6 lg:h-6" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '                                        <path d="M12 8.94667V11.304C12.0001 11.4728 11.9361 11.6353 11.8211 11.7588C11.706 11.8823 11.5484 11.9575 11.38 11.9693C11.0887 11.9893 10.8507 12 10.6667 12C4.77533 12 0 7.22467 0 1.33333C0 1.14933 0.01 0.911334 0.0306667 0.62C0.0424816 0.451629 0.117721 0.294007 0.241202 0.178939C0.364684 0.0638712 0.527215 -7.62887e-05 0.696 1.71053e-07H3.05333C3.13603 -8.35563e-05 3.2158 0.0305727 3.27715 0.0860136C3.33851 0.141455 3.37706 0.217722 3.38533 0.3C3.40067 0.453334 3.41467 0.575333 3.428 0.668C3.56049 1.59262 3.832 2.49189 4.23333 3.33533C4.29667 3.46867 4.25533 3.628 4.13533 3.71333L2.69667 4.74133C3.5763 6.79097 5.2097 8.42436 7.25933 9.304L8.286 7.868C8.32796 7.80933 8.38919 7.76725 8.459 7.7491C8.52881 7.73095 8.60277 7.73787 8.668 7.76867C9.51135 8.16924 10.4104 8.44008 11.3347 8.572C11.4273 8.58533 11.5493 8.6 11.7013 8.61467C11.7835 8.62309 11.8596 8.66171 11.9149 8.72305C11.9702 8.78439 12.0008 8.86408 12.0007 8.94667H12Z"\n' +
      '                                              fill="#18BE6E"/>\n' +
      '                                    </svg>\n' +
      '                                </div>\n' +
      '                                <div class="text-white sm:text-3xl lg:text-4xl font-bold">\n' +
      '                                    Перезвоните мнеd\n' +
      '                                </div>\n' +
      '                            </div>\n' +
      '                        </div>\n' +
      '                        <div class="flex items-center justify-center bg-primary flex-grow hover-effect call-write hover-effect cursor-pointer">\n' +
      '                            <div class="flex items-center">\n' +
      '                                <div class="flex flex-shrink-0 w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-white items-center justify-center mr-2 lg:mr-4">\n' +
      '                                    <svg width="14" height="13" class="h-4 w-4 lg:w-6 lg:h-6" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '                                        <path d="M5.66732 0H8.33398C9.74847 0 11.105 0.561903 12.1052 1.5621C13.1054 2.56229 13.6673 3.91885 13.6673 5.33333C13.6673 6.74782 13.1054 8.10438 12.1052 9.10457C11.105 10.1048 9.74847 10.6667 8.33398 10.6667V13C5.00065 11.6667 0.333984 9.66667 0.333984 5.33333C0.333984 3.91885 0.895888 2.56229 1.89608 1.5621C2.89628 0.561903 4.25283 0 5.66732 0Z"\n' +
      '                                              fill="#1C7CD6"/>\n' +
      '                                    </svg>\n' +
      '                                </div>\n' +
      '                                <div class="text-white sm:text-3xl lg:text-4xl font-bold">\n' +
      '                                    Написать нам\n' +
      '                                </div>\n' +
      '                            </div>\n' +
      '                        </div>\n' +
      '                    </div>\n' +
      '                </div>\n' +
      '            </div>\n' +
      '        </div>';

    if (mql.matches) {
      $('.carousel-full').slick('slickAdd', `<div>${slideContacts}</div>`);
    }
  };


  addSlideContacts();

  $('.carousel-full')

  // отображаем названия прикрепляемого фойла
  const clipFileName = (clipInputSelector, clipTextTagSelector, clipText) => {
    $(clipInputSelector).on('change', function () {
      let inputVal = $(this).val();
      const sliceSymbPosition = inputVal.lastIndexOf('\\');
      inputVal = inputVal.slice(sliceSymbPosition + 1);
      console.log(inputVal);

      if (inputVal !== '') {
        $(this).closest('label').find(clipTextTagSelector).text(inputVal);
      } else {
        $(this).closest('label').find(clipTextTagSelector).text(clipText);
      }
    });
  };
  clipFileName('.clip-file__input', '.clip-file__text', 'Прикрепить резюме');


  // кастомные ползунки
  $('.range-slider').each(function () {
    const el = $(this);
    $(this).slider({
      animate: true,
      min: el.data('min'),
      max: el.data('max'),
      step: el.data('step'),
      // slide: function (event, ui){
      //   console.log(ui.value);
      // }
    });
  });

  //тултипы
  $(function () {
    $('.tooltip').tooltip({
      // position: {
      //   my: "center top+30",
      //   at: "center top",
      // }
    });
  });


  // попап-галерея
  const magnificGallery = (element, delegateElement) => {
    $(element).each(function () {
      $(this).magnificPopup({
        delegate: delegateElement,
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });
  };
  // для этапов строительства
  magnificGallery('.etaps', '.etaps__item');
  // для карусели объектов
  magnificGallery('.carousel-wrap', '.carousel-wrap__photo');
  // для карточки застройщика
  magnificGallery('.mkr-cards-gallery', 'a');


  const tabs = (tabsWrap, tab, tabsContent) => {
    $(tabsWrap).on('click', `${tab}:not(.active)`, function () {
      //получаем имя таба
      const tabName = $(this).data('tab');
      // снимаем класс с активного таба
      $(this).closest(tabsWrap).find(`${tab}.active`).removeClass('active');
      // добавляем класс табу на который кликнули
      $(this).addClass('active');
      // прячем действующий контент таба
      $(this).closest(tabsWrap).find(tabsContent).find('[data-tab]').hide();
      // показываем контент по имени таба
      $(this).closest(tabsWrap).find(tabsContent).find(`[data-tab=${tabName}]`).fadeIn(300);
    });
  };
  // для личного кабинета
  tabs('.lk-form-block', '.blue-tabs__tab', '.lk-form-block__content');

  // мобильное меню

  $('.bars').on('click', function () {
    $('.mobile-menu').fadeIn();
    $('body').addClass('overflow-hidden');
  });

  $('.mobile-menu__close').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('body').removeClass('overflow-hidden');
  });


  //кастомные селекты

  const customSelectMultiple = (el) => {
    $(el).each(function (el) {
      $(this).SumoSelect({
        placeholder: $(this).data('placeholder'),
        captionFormat: '{0} выбрано',
        captionFormatAllSelected: '{0} выбрано',
        selectAll: true,
        locale: ['OK', 'Отмена', 'Выбрать все'],
      });
    })
  };

  customSelectMultiple('.customMultiple');

  const customSearchMultiple = (el) => {
    $(el).each(function (el) {
      $(this).SumoSelect({
        placeholder: $(this).data('placeholder'),
        captionFormat: '{0} выбрано',
        captionFormatAllSelected: '{0} выбрано',
        search: true,
        selectAll: true,
        searchText: 'Введите название...',
        locale: ['OK', 'Отмена', 'Выбрать все'],
      });
    })
  };

  customSearchMultiple('.customSearchMultiple');


  //перетаскивание мышью в шахматке

  const cardsSlider = document.getElementById("cardsSlider");

  let isGrabbed = false;
  let initialPos;
  let scrollLeft;

  const initializeDrag = (e) => {
    cardsSlider.classList.add('active')
    isGrabbed = true;
    initialPos = e.pageX - cardsSlider.offsetLeft;
    scrollLeft = cardsSlider.scrollLeft;
  }

  const handleDragging = (e) => {
    if (!isGrabbed) return;
    e.preventDefault();
    const xPos = e.pageX - cardsSlider.offsetLeft
    const walk = (xPos - initialPos) * 2;
    cardsSlider.scrollLeft = scrollLeft - walk;
  }

  const deInitializeDrag = () => {
    isGrabbed = false;
    cardsSlider.classList.remove('active');
  }

  if (cardsSlider) {
    cardsSlider.addEventListener('mousedown', initializeDrag);
    cardsSlider.addEventListener('mousemove', handleDragging);
    cardsSlider.addEventListener('mouseleave', deInitializeDrag);
    cardsSlider.addEventListener('mouseup', deInitializeDrag);
  }


  // медиа запрос
  const mql = window.matchMedia('all and (min-width: 1024px');


  // разделение экрана на странице с картой
  const splitScreen = () => {
    let c_width = $('.map-view-container').width();

    const leftPan = $(".pan1");
    const rightPan = $(".pan2");
    const r = $("#resize");

    let leftPan_width = leftPan.width() / c_width * 10;
    let unlock = false;

    $(document).mousemove(function (e) {
      const minWidth = 34;
      const maxWidth = 66;

      let change = Math.floor(e.clientX / c_width * 100);

      if (unlock) {
        if (change > minWidth && change < maxWidth) {
          // $("#debug").text(change);
          leftPan.css("width", change + "%");
          rightPan.css("width", 100 - change + "%");
        }
      }
    });

    r.mousedown(function (e) {
      leftPan_width = leftPan.width() / c_width * 100;
      unlock = true;
      r.css("background-color", "rgba(0, 0, 0, 0.2)");
    });

    $(document).mousedown(function (e) {
      if (unlock) {
        e.preventDefault();
        $('.right-no-click').removeClass('hidden');
      }
    });

    $(document).mouseup(function (e) {
      unlock = false;
      // $("#debug").text("");
      r.css("background-color", "rgba(0, 0, 0, 0.1)");
      $('.right-no-click').addClass('hidden');
    });

    $(window).resize(function () {
      c_width = $('.map-view-container').width();
      leftPan.css("width", '50%');
      rightPan.css("width", '50%');
    });

  };

  if (mql.matches) {
    splitScreen();
  }


  //прилипающий блок останавливающийся перед футером
  const stickyOrderInfo = () => {

    const mapViewContainer = $('.map-view-container')[0];

    if (mapViewContainer !== undefined) {
      $(window).scroll(function () {
        const stickyBlock = $('.pan2');

        const distanceUnderTop = $('.map-view-container').offset().top;
        const scrollPosition = $(window).scrollTop();
        const endPosition = $('.stop-map').offset().top;
        const mapHeight = $('.map-block').height();

        if (scrollPosition >= distanceUnderTop && scrollPosition < endPosition - mapHeight) {
          $('.pan2').css({
            'position': 'fixed',
            'top': 0,
            'right': 0
          });
        } else if (scrollPosition >= endPosition - mapHeight) {
          $('.pan2').css({
            'position': 'relative',
            'top': endPosition - mapHeight - distanceUnderTop + 'px'
          })
            .removeClass('map-block_fixed');
        } else {
          $('.pan2').css({
            'position': 'relative'
          });
        }

      });
    }
  };

  if (mql.matches) {
    stickyOrderInfo();
  }
  // модалки
  $('.call').on('click', function () {
    $('.call-modal').arcticmodal();
  });

  $('.call-write').on('click', function () {
    $('.write-modal').arcticmodal();
  });

  //добавляем класс active по клику

  const toggleClassActiveByClick = (element) => {
    element.on('click', function () {
      $(this).toggleClass('active');
    })
  };

  const toggleLike = (elementSelector, elementIconSelector) => {
    $(elementSelector).on('click', `${elementIconSelector}:not(active)`, function () {
      $(this).closest('.score').find(elementIconSelector + '.active').removeClass('active')
      $(this).addClass('active');
    });

    $(elementSelector).on('click', `${elementIconSelector}.active`, function () {
      $(this).removeClass('active');
    })
  }

  toggleClassActiveByClick($('.building__favorite-icon'));
  toggleClassActiveByClick($('.add-favorite'));
  toggleLike('.score', '.score__icon');


  //грузим изображение из текущего слайда блока консультантов в иконку вызова этого блока на мобильных аппаратах
  const loadCurrentManagerInMobileCall = () => {
    const currentSlideImg = $('.consult-block__slider').find('.slick-current .consult-block__avatar').attr('style');
    $('.consult-call').find('.consult-call__manager-inner').attr('style', currentSlideImg);
  };
  loadCurrentManagerInMobileCall();

  //после пролистывания менеджера меняем изображение в иконке вызова блока консультации на текущего менеджера
  $('.consult-block__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    loadCurrentManagerInMobileCall();
  });


  $('.consult-call').on('click', function () {
    $(this).addClass('active');
    $(this).prev('.consult-block').removeClass('visual-hide-md').addClass('fadeIn');
  });

  $('.consult-block__close').on('click', function () {
    console.log('ddd');
    $(this).closest('.consult-block').next('.consult-call').removeClass('active');
    $(this).closest('.consult-block').addClass('visual-hide-md').removeClass('fadeIn');
  });

});