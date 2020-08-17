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
        slideToClickedSlide: true,
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
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 40,
        initialSlide: 1,
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
