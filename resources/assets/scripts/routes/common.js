/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {

    // swiperJS 
    var mainSwiper = new Swiper('.swiper-container-main', {
      // Optional parameters
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      // Navigation arrows
      navigation: {
        nextEl: '.main-slider-button-next',
        prevEl: '.main-slider-button-prev',
      },
    })
    var videoSwiper = new Swiper('.main-videos__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 40,
      slideToClickedSlide: true,
    })
    
    mainSwiper.init();
    videoSwiper.init();
  },
};
