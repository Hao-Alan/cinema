import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovie } from "../../../Redux/counter/CarouselSlice";
const HomeCarousel = () => {
  const { movieImg } = useSelector((state) => state.carouselSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  const renderCarousel = () => {
    return movieImg.map((item, index) => {
      return (
        <>
          <SwiperSlide
            key={index}
            // style={{ backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} alt={item.maPhim} />
          </SwiperSlide>
        </>
      );
    });
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {renderCarousel()}
      </Swiper>
    </>
  );
};

export default HomeCarousel;
