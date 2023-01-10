import React from "react";

import { Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieFeature } from "../../../Redux/counter/FeatureSlice";
import { useEffect } from "react";
import Films from "../../../Components/Films";
import HomeGridSwiper from "./HomeGridSwiper";

const { Meta } = Card;

const HomeFeature = () => {
  const dispatch = useDispatch();
  const features = useSelector((state) => state.FeatureSlice.movieFeature);
  // console.log("xxx", features);
  useEffect(() => {
    dispatch(fetchMovieFeature());
  }, []);

  return (
    <div>
      <HomeGridSwiper features={features} />
    </div>
  );
};

export default HomeFeature;
