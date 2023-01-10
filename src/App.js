import React from 'react';
import logo from './logo.svg';
import { Counter } from './Redux/counter/Counter';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes';
// import "swiper/css/bundle";


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
