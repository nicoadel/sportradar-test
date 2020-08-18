/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {

    //init swiper on load event, else it gets wrong slide width
    window.addEventListener('load', () => {
      var mainSwiper = new Swiper('.swiper-container-main', {
        // Optional parameters
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        updateOnImagesReady: true,
        preloadImages: true,
        autoplay: {
          delay: 4000,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.main-slider-button-next',
          prevEl: '.main-slider-button-prev',
        },
      })

      var seasonSwiper = new Swiper('.season-slider__swiper', {
        grabCursor: true,
        initialSlide: 1,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 767px
          767: {
            slidesPerView: 'auto',
            spaceBetween: 40,
          },
        },
        // Navigation arrows
        navigation: {
          nextEl: '.season-button-next',
          prevEl: '.season-button-prev',
        },
      })

      mainSwiper.init();
    }, false);
  },
};
