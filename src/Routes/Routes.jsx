import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../Layout/About/About";
import BookingDetail from "../Layout/BookingDetail/BookingDetail";
import Contact from "../Layout/Contact/Contact";
import DetailCinema from "../Layout/Home/DetailCinema/DetailCinema";
import DetailTotal from "../Layout/Home/DetailCinema/DetailTotal";
import HomeCarousel from "../Layout/Home/HomeCarousel/HomeCarousel";
import HomeMenu from "../Layout/Home/HomeCinema/HomeMenu";
import HomeFeature from "../Layout/Home/HomeFeature/HomeFeature";
import Login from "../Layout/Login/Login";
import News from "../Layout/News/News";
import Register from "../Layout/Register/Register";
import CheckOutTemplate from "../Templates/CheckOutTemplate/CheckOutTemplate";
import ErrorPage from "../Templates/ErrorTemplates/ErrorPage";
import HomeTemplate from "../Templates/HomeTemplates/HomeTemplate";

const Routes = createBrowserRouter([
  /*  public routes */
  {
    path: "/login",
    id: "login",
    element: <Login />,
  },
  {
    path: "/register",
    id: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <HomeTemplate>
        <HomeCarousel />
        <HomeFeature />
        <HomeMenu></HomeMenu>
      </HomeTemplate>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    id: "about",
    element: (
      <HomeTemplate>
        <About />
      </HomeTemplate>
    ),
  },
  {
    path: "/contact",
    id: "contact",
    element: (
      <HomeTemplate>
        <Contact />
      </HomeTemplate>
    ),
  },
  {
    path: "/news",
    id: "news",
    element: (
      <HomeTemplate>
        <News />
      </HomeTemplate>
    ),
  },

  {
    path: "/detail/:id",
    id: "detail",
    element: (
      <HomeTemplate>
        <DetailTotal />
      </HomeTemplate>
    ),
  },
  {
    path: "/checkout/:id",
    id: "checkout",
    element: (
      // <HomeTemplate>
      <CheckOutTemplate />
      // </HomeTemplate>
    ),
  },

  /* we want to protect these routes */
]);

export default Routes;
