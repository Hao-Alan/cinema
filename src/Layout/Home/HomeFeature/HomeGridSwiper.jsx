import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./style.css";
// import required modules
import { Grid, Pagination } from "swiper";
import Films from "../../../Components/Films";
import FilmFlip from "../../../Components/FilmFlip";
import { useDispatch, useSelector } from "react-redux";
import {
  phimDangChieu,
  phimSapChieu,
  tatCaPhim,
} from "../../../Redux/counter/FeatureSlice";

const HomeGridSwiper = ({ features }) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector((state) => state.FeatureSlice);

  const renderSwiperSlice = () => {
    return features.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          {" "}
          {/* <Films features={item} /> */}
          <FilmFlip features={item} />
        </SwiperSlide>
      );
    });
  };

  let phimDangChieuActive = dangChieu === true ? "phimDangChieuActive" : "";

  let phimSapChieuActive = sapChieu === true ? "phimSapChieuActive" : "";

  return (
    <>
      <div className="mt-7 mb-3 container mx-auto ">
        <button
          className={`button-82-pushable mr-5 `}
          role="button"
          onClick={() => {
            dispatch(phimDangChieu());
          }}
        >
          <span className="button-82-shadow"></span>
          <span className={`button-82-edge ${phimDangChieuActive}`}></span>
          <span className="button-82-front text"> Phim đang chiếu</span>
        </button>

        <button
          className={`button-82-pushable mr-5 `}
          role="button"
          onClick={() => {
            dispatch(phimSapChieu());
          }}
        >
          <span class="button-82-shadow"></span>
          <span class={`button-82-edge ${phimSapChieuActive}`}></span>
          <span class="button-82-front text"> Phim sắp chiếu</span>
        </button>

        <button
          class="button-82-pushable "
          role="button"
          onClick={() => {
            dispatch(tatCaPhim());
          }}
        >
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text"> Tất cả phim</span>
        </button>
      </div>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper container "
      >
        {renderSwiperSlice()}
      </Swiper>
    </>
  );
};

export default HomeGridSwiper;
