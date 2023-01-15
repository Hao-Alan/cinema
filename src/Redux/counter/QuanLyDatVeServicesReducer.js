import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { QuanLyDatVeServices } from '../../services/QuanLyDatVeServices'

const initialState = {
    filmInfo: {}
}

export const FetchQuanLyDatVe = createAsyncThunk(
    'QuanLyDatVeServices/FetchQuanLyDatVe',
    async (ThongTinPhim) => {
        try {

            const response = await QuanLyDatVeServices(ThongTinPhim)
            // console.log('xxx');
            if (response.status === 200) {
                // console.log('response', response.data);
                return response?.data?.content


            }
        } catch (error) {
            console.log('error', error);
        }
    }
)


export const QuanLyDatVeServicesSliceReducer = createSlice(
    {
        name: 'QuanLyDatVeServices',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(FetchQuanLyDatVe.fulfilled, (state, action) => {
                state.filmInfo = action.payload
            })
        }

    }

)

export default QuanLyDatVeServicesSliceReducer.reducer