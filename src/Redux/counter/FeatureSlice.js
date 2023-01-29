import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LayDanhSachPhim } from '../../services/QuanLyPhimServices'

const initialState = {
    movieFeature: [{
        "maPhim": "",
        "tenPhim": "",
        "biDanh": "",
        "trailer": "",
        "hinhAnh": "",
        "moTa": "",
        "maNhom": "",
        "ngayKhoiChieu": "",
        "danhGia": "",
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }
    ],
    movieFeatureCopy: [],
    dangChieu: true,
    sapChieu: true
}

export const fetchMovieFeature = createAsyncThunk(
    'movieFeature/fetchMovieFeature',
    async () => {
        try {
            const response = await LayDanhSachPhim()
            return (response.data.content)
        } catch (error) {
            console.log('error', error);
        }
    }
)



export const FeatureSlice = createSlice({
    name: 'movieFeature',
    initialState,
    reducers: {
        phimDangChieu: (state) => {
            state.dangChieu = true
            state.sapChieu = false

            const newMovieFeature = state.movieFeatureCopy.filter(item => item.dangChieu === true)
            state.movieFeature = newMovieFeature
        },
        phimSapChieu: (state) => {
            state.sapChieu = true
            state.dangChieu = false


            const newMovieFeature = state.movieFeatureCopy.filter(item => item.dangChieu === false)
            state.movieFeature = newMovieFeature
        },
        tatCaPhim: (state) => {

            state.movieFeature = state.movieFeatureCopy
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieFeature.fulfilled, (state, action) => {
                state.movieFeature = action.payload
                state.movieFeatureCopy = state.movieFeature
            })
            .addCase(fetchMovieFeature.pending, (state) => {
                state.status = 'loading...'
            })
    }

})
export const { phimDangChieu, phimSapChieu, tatCaPhim } = FeatureSlice.actions

export default FeatureSlice.reducer