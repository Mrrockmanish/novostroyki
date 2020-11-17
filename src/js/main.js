$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7 (999) 999 - 99 - 99");


  // показываем скрытый контент по клику на заголовок
  const slideContent = (caption, content, chevron) => {
    $(caption).on('click', function (){
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
  $('.building').find('.building-carousel').each(function (){
    $(this).slick({
      lazyLoad: 'ondemand',
      fade: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      dots: false,
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
  });

  // универсальная функция для одиночных слайдеров
  const singleSlider = (sliderSelector) => {
    $(sliderSelector).each(function (){
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

  // отображаем названия прикрепляемого фойла
  const clipFileName = (clipInputSelector, clipTextTagSelector, clipText) => {
    $(clipInputSelector).on('change', function (){
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
  $('.range-slider').each(function (){
    const el = $(this);
    $(this).slider({
      min: el.data('min'),
      max: el.data('max'),
      step: el.data('step'),
      // slide: function (event, ui){
      //   console.log(ui.value);
      // }
    });
  });

  //тултипы
  $( function() {
    $('.tooltip').tooltip({
      // position: {
      //   my: "center top+30",
      //   at: "center top",
      // }
    });
  } );


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
    $(tabsWrap).on('click', `${tab}:not(.active)`, function (){
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
        locale :  ['OK', 'Отмена', 'Выбрать все'],
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
        searchText : 'Введите название...',
        locale :  ['OK', 'Отмена', 'Выбрать все'],
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

    let leftPan_width = leftPan.width()/c_width * 10;
    let unlock = false;

    $(document).mousemove(function(e) {
      const minWidth = 34;
      const maxWidth =  66;

      let change = Math.floor(e.clientX/c_width * 100);

      if(unlock) {
        if(change > minWidth && change < maxWidth) {
          // $("#debug").text(change);
          leftPan.css("width", change + "%");
          rightPan.css("width", 100 - change + "%");
        }
      }
    });

    r.mousedown(function(e) {
      leftPan_width = leftPan.width()/c_width * 100;
      unlock = true;
      r.css("background-color", "rgba(0, 0, 0, 0.2)");
    });

    $(document).mousedown(function(e) {
      if(unlock) {
        e.preventDefault();
        $('.right-no-click').removeClass('hidden');
      }
    });

    $(document).mouseup(function(e) {
      unlock = false;
      // $("#debug").text("");
      r.css("background-color", "rgba(0, 0, 0, 0.1)");
      $('.right-no-click').addClass('hidden');
    });

    $(window).resize(function (){
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
    $(window).scroll(function() {
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
      }

      else if (scrollPosition >= endPosition - mapHeight) {
        $('.pan2').css({
          'position': 'relative',
          'top': endPosition - mapHeight - distanceUnderTop + 'px'
        })
          .removeClass('map-block_fixed');
      }

      else {
        $('.pan2').css({
          'position': 'relative'
        });
      }

      // if ($(window).scrollTop() >= distance) {
      //   stickyBlock.removeClass('map-block_fixed');
      // } else {
      //   stickyBlock.addClass('map-block_fixed');
      // }
    });
  };

  if (mql.matches) {
    stickyOrderInfo();
  }







});