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
  magnificGallery('.carousel-full', 'a');
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




});