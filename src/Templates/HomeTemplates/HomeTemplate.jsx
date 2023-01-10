import React from "react";
import HomeMenu from "../../Layout/Home/HomeCinema/HomeMenu";
import HomeFeature from "../../Layout/Home/HomeFeature/HomeFeature";
import HomeCarousel from "../../Layout/Home/HomeCarousel/HomeCarousel";
import HomeFooter from "./HomeFooter/HomeFooter";
import HomeHeader from "./HomeHeader/HomeHeader";

const HomeTemplate = ({ children }) => {
  return (
    <div>
      <HomeHeader />
      {children}

      <HomeFooter />
    </div>
  );
};

export default HomeTemplate;
