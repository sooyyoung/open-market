import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "./Banner.style";

export default function Banner() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <Container>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2016/04/21/11/32/groceries-1343141_1280.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2014/10/22/17/50/books-498422_1280.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/03/22/14/01/toys-2165123_1280.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2016/08/31/14/49/doraemon-1633720_1280.jpg" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
