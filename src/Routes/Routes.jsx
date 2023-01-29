import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "../Components/LoadingPage";
import About from "../Layout/About/About";
import Dashboard from "../Layout/Admin/Users/Users";
import AddFilms from "../Layout/Admin/Films/AddFilms/AddFilms";
import FilmsAdmin from "../Layout/Admin/Films/FilmsAdmin";
import ShowTime from "../Layout/Admin/ShowTime/ShowTime";
import BookingDetail from "../Layout/BookingDetail/BookingDetail";
import Contact from "../Layout/Contact/Contact";
import DetailCinema from "../Layout/Home/DetailCinema/DetailCinema";
import DetailTotal from "../Layout/Home/DetailCinema/DetailTotal";
import HomeCarousel from "../Layout/Home/HomeCarousel/HomeCarousel";
import HomeMenu from "../Layout/Home/HomeCinema/HomeMenu";
import HomeFeature from "../Layout/Home/HomeFeature/HomeFeature";
import Login from "../Layout/Login/Login";
import News from "../Layout/News/News";
import Profile from "../Layout/Profile/Profile";
import Register from "../Layout/Register/Register";
import AdminTemplate from "../Templates/AdminTemplate/AdminTemplate";
import CheckOutTemplate from "../Templates/CheckOutTemplate/CheckOutTemplate";
import ErrorPage from "../Templates/ErrorTemplates/ErrorPage";
import HomeTemplate from "../Templates/HomeTemplates/HomeTemplate";
import Users from "../Layout/Admin/Users/Users";

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
    element: <CheckOutTemplate />,
  },
  {
    path: "/profile/",
    id: "profile",
    element: <Profile />,
  },
  {
    path: "/admin/",
    id: "admin",
    element: <AdminTemplate />,
    children: [
      {
        path: "/admin/films",
        id: "films",
        element: <FilmsAdmin />,
      },
      {
        path: "/admin/films/addFilms",
        id: "addFilms",
        element: <AddFilms />,
      },
      {
        path: "/admin/users",
        id: "users",
        element: <Users />,
      },
      {
        path: "/admin/showtimes",
        id: "showtime",
        element: <ShowTime />,
      },
    ],
  },
]);

export default Routes;
