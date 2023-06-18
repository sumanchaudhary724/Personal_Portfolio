import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import slide_image_1 from "../assets/images/profile-1.jpg";
import slide_image_2 from "../assets/images/profile-2.jpeg";
import slide_image_3 from "../assets/images/profile-3.jpeg";
import slide_image_4 from "../assets/images/profile-4.jpeg";
import slide_image_5 from "../assets/images/profile-5.jpeg";
import slide_image_6 from "../assets/images/profile-1.jpg";
import slide_image_7 from "../assets/images/profile-2.jpeg";

export const Slider = () => {
  return (
    <div className="container">
      <div className="title">
        <span>Projects</span>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" height="30%" width="30%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" height="30%" width="30%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" height="30%" width="30%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" height="30%" width="30%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" height="30%" width="30%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" height="30%" width="30%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" height="30%" width="30%" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
