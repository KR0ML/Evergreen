const swiper = new Swiper('.swiper', {
    // Бексонечная прокрутка
    loop: true,
  
    // Стрелки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Количетсво отображаемых слайдов
    slidesPerView: 3.5,

    // Расстояние между слайдами
    spaceBetween: 50,

    // Слайд по центру
    centeredSlides: true,

    // Значения для ширины (адаптив)
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3.8,
      },
    }
  });