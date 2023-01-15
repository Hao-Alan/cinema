import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/counter/counterSlice';
import carouselSlice from '../Redux/counter/CarouselSlice'
import FeatureSlice from '../Redux/counter/FeatureSlice';
import MenuHomeSlice from '../Redux/counter/MenuHomeSlice';
import fetchLogin from '../Redux/counter/LoginSlice';
import DetailSlice from '../Redux/counter/DetailSlice';
import QuanLyDatVeServicesSliceReducer from '../Redux/counter/QuanLyDatVeServicesReducer';





export const store = configureStore({
  reducer: {
    counter: counterReducer,
    carouselSlice,
    FeatureSlice,
    MenuHomeSlice,
    DetailSlice,
    fetchLogin,
    QuanLyDatVeServicesSliceReducer

  }
});
