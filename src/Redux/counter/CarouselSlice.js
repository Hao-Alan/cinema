import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { lazy } from 'react'
import { LayDanhSachBanner } from '../../services/QuanLyPhimServices'
import { DOMAIN } from '../../Utils/settings/config'

const initialState = {
    movieImg: [{
        "maBanner": 1,
        "maPhim": 1282,
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
    },
    ]
}


// const URL = ` ${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`

export const fetchMovie = createAsyncThunk(
    'movie/fetchMovie', async () => {
        try {
            const response = await LayDanhSachBanner()
            return response.data.content
        } catch (error) {
            console.log('error', error);
        }
    })


export const carouselSlice = createSlice({
    name: 'CarouselSlice',
    initialState,
    reducers: {
        setMovieImg(state, action) {
            state.movieImg = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.pending, (state) => {
                state.status = 'loading...'
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.status = 'idle';
                state.movieImg = action.payload
            })

    }

}
)

export const { setMovieImg } = carouselSlice.actions

export default carouselSlice.reducer