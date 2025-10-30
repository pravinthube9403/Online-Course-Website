
let swiperInstance;
function handleSwiper() {
  if (window.innerWidth <= 767) {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  } else {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.mySwiper', {
        loop: false,
        spaceBetween: 24,
        slidesPerView: 4,
        freeMode: true,
        breakpoints: {
          1490: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 2.5,
          },
          992: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          390: {
            slidesPerView: 1,
          },
        },
      });
    }
  }
}

window.addEventListener('resize', handleSwiper);
window.addEventListener('DOMContentLoaded', handleSwiper);
