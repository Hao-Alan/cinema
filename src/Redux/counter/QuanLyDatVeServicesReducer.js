import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { QuanLyDatVeServices } from '../../services/QuanLyDatVeServices'

const initialState = {
    filmInfo: {
        danhSachGhe: [],
        thongTinPhim: {}
    },
    ListGheDangDat: []


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
        reducers: {
            getGheDangDat: (state, action) => {
                let newListGheDangDat = [...state.ListGheDangDat]

                let index = newListGheDangDat.findIndex(item => item.maGhe === action.payload.maGhe)
                if (index != -1) {
                    newListGheDangDat.splice(index, 1)
                } else {
                    newListGheDangDat.push(action.payload)
                }
                state.ListGheDangDat = [...newListGheDangDat]

            }
        },
        extraReducers: (builder) => {
            builder.addCase(FetchQuanLyDatVe.fulfilled, (state, action) => {
                state.filmInfo = action.payload
            })
        }

    }

)

export const { getGheDangDat } = QuanLyDatVeServicesSliceReducer.actions

export default QuanLyDatVeServicesSliceReducer.reducer