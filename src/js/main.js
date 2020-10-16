$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7(999) 999-9999");
  


  // показываем скрытый контент по клику на заголовок
  const slideContent = (caption, content, chevron) => {
    $(caption).on('click', function (){
      $(this).find(chevron).toggleClass('open');
      $(this).next(content).slideToggle();
    })
  };
  // в карточке застройщика
  slideContent('.building__rooms-caption', '.building__rooms-content', '.building__rooms-chevron');
  // в подвале
  slideContent('.footer-category__caption', '.footer-category__menu', '.footer-category__chevron');

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

  // слайдер статистика
  $('.statistic-slider').slick({
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
      '</svg></div>'
  });

  // отображаем названия прикрепляемого фойла
  const clipFile = (clipInputSelector, clipTextTagSelector, clipText) => {
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
  clipFile('.clip-file__input', '.clip-file__text', 'Прикрепить резюме');








});