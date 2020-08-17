/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    var mySwiper = new Swiper('.swiper-container', {
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
    console.log('hi');
  },
};
