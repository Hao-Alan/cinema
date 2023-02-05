import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { CapNhatPhimUpload, QuanLyDatVeServiceMoi, QuanLyDatVeServices, ThemPhimUploadHinh, XoaPhimxx } from '../../services/QuanLyDatVeServices'
import { QuanLyNguoiDungDangNhapService } from '../../services/QuanLyNguoiDungServices'
import { LayThongTinPhim } from '../../services/QuanLyPhimServices'
import { TOKEN } from '../../Utils/settings/config'
import { fetchMovieFeature } from './FeatureSlice'

const initialState = {
    filmInfo: {
        danhSachGhe: [],
        thongTinPhim: {}
        ,
        danhSachPhimDaDat: {},

    },
    danhSachPhimKhachHangDD: [{ maGhe: 47554 }, { maGhe: 47555 }],
    loading: false,
    activeTab: "1",
    ListGheDangDat: [],
    ListPhimMinhDat: {
        "maLichChieu": 0,
        "danhSachVe": [
            {
                "maGhe": 0,
                "giaVe": 0
            }
        ]
    },
    ThongTinPhim: {},


}

export const FetchQuanLyDatVe = createAsyncThunk(
    'QuanLyDatVeServices/FetchQuanLyDatVe',
    async (ThongTinPhim) => {
        try {
            const response = await QuanLyDatVeServices(ThongTinPhim)
            if (response.status === 200) {
                console.log('response', response.data);
                return response?.data?.content
            }
        } catch (error) {
            console.log('error', error);
        }
    }
)


export const QuanLyDatVeSliceMoi = createAsyncThunk(
    'QuanLyDatVeServices/QuanLyDatVeSliceMoi',
    async (phimPush) => {
        try {
            const response = await QuanLyDatVeServiceMoi(phimPush)
            if (response.status === 200) {
                console.log("responsePHIMMOI", response);
                return response?.data?.content
            }

        } catch (error) {
            console.log("error", error.response.status);
        }
    }
)

export const QuanLyNguoiDungDangNhapServiceReducer = createAsyncThunk(
    'QuanLyDatVeServices/QuanLyNguoiDungDangNhapServiceReducer',
    async (accessToken) => {
        try {
            const response = await QuanLyNguoiDungDangNhapService(accessToken)
            if (response.status === 200) {
                // console.log("responseNew", response.data.content);
                return response?.data?.content
            }
        }
        catch (error) {
            console.log("error", error.response.status)
        }
    }

)

export const QuanLyThemPhimUploadHinh = createAsyncThunk(
    'QuanLyDatVeServices/QuanLyThemPhimUploadHinh',
    async (hinhAnh) => {
        try {
            let response = await ThemPhimUploadHinh(hinhAnh)
            if (response.status === 200) {
                alert("thêm thành công!")
                console.log("responseNew", response?.data?.content);
                return response?.data?.content

            }
        } catch (error) {
            console.log("error", error?.response?.data);
        }
    }
)

export const QuanLyLayThongTinPhim = createAsyncThunk(
    'QuanLyDatVeServices/QuanLyLayThongTinPhim',
    async (maPhim) => {
        try {
            let response = await LayThongTinPhim(maPhim)
            if (response.status === 200) {
                console.log("responseNew", response.data.content);
                return response?.data?.content

            }
        } catch (error) {
            console.log("error", error.response.data);
        }
    }
)

export const QuanLyCapNhatPhimUpload = createAsyncThunk(
    "QuanLyCapNhatPhimUpload/QuanLyDatVeServices",
    async (filmData) => {

        try {
            const response = await CapNhatPhimUpload(filmData)
            alert("ban đã cập nhật thành công")
            console.log("phimVuaCapNhat", response.data.content);
            return

        } catch (error) {
            console.log("error", error);
        }
    }
)

export const XoaPhimPhim = createAsyncThunk(
    "XoaPhimPhim/QuanLyDatVeServices",
    async (filmData) => {

        try {
            const response = await XoaPhimxx(filmData)
            console.log("phim Da xoa", response.content);
            alert("ban da xoa thanh cong")

        } catch (error) {
            console.log("error", error);
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

            },
            resetPhimDangDat: (state) => {
                state.ListGheDangDat = []
            },
            changeActiveTab: (state) => {
                state.activeTab = "2"
            },
            changeActiveTabByMouse: (state, action) => {
                state.activeTab = action.payload
            },
        },
        extraReducers: (builder) => {
            builder.addCase(FetchQuanLyDatVe.fulfilled, (state, action) => {
                state.filmInfo = action.payload
                state.loading = false

            })
            builder.addCase(FetchQuanLyDatVe.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(QuanLyDatVeSliceMoi.fulfilled, (state, action) => {
                state.ListPhimMinhDat = action.payload
                state.loading = false
            })
            builder.addCase(QuanLyDatVeSliceMoi.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(QuanLyNguoiDungDangNhapServiceReducer.fulfilled, (state, action) => {
                state.danhSachPhimDaDat = action.payload
                state.loading = false
            })
            builder.addCase(QuanLyNguoiDungDangNhapServiceReducer.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(QuanLyLayThongTinPhim.fulfilled, (state, action) => {
                state.ThongTinPhim = action.payload
                state.loading = false
            })
            builder.addCase(QuanLyLayThongTinPhim.pending, (state, action) => {
                state.loading = true
            })
            // builder.addCase(QuanLyCapNhatPhimUpload.fulfilled, (state, action) => {
            //     state.ThongTinPhim = action.payload
            //     state.loading = false
            // })



        }

    }

)

export const { getGheDangDat, resetPhimDangDat, changeActiveTab, changeActiveTabByMouse } = QuanLyDatVeServicesSliceReducer.actions

export default QuanLyDatVeServicesSliceReducer.reducer