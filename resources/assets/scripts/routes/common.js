/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    var mainSwiper = new Swiper('.swiper-container-main', {
      // Optional parameters
      loop: true,
      // Navigation arrows
      centeredSlides: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    var videoSwiper = new Swiper('.swiper-container-video', {
      slidesPerView: 'auto',
      spaceBetween: 40,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    console.log('hi');
  },
};
