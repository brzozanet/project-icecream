import "./sass/main.scss";

import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
  },
});
