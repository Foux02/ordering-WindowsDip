import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const slider = ({ arrowLeft, arrowRight, numberslide, swiperClass }) => {
  const swiper = new Swiper(swiperClass, {
    modules: [Navigation],

    loop: true,

    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: arrowRight,
      prevEl: arrowLeft,
    },

    breakpoints: {
      576: {
        slidesPerView: numberslide,
        spaceBetween: 20,
      },
    },
  });
};

export default slider;
