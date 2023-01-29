import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { QuanLyDatVeServiceMoi, QuanLyDatVeServices } from '../../services/QuanLyDatVeServices'
import { QuanLyNguoiDungDangNhapService } from '../../services/QuanLyNguoiDungServices'

const initialState = {
    filmInfo: {
        danhSachGhe: [],
        thongTinPhim: {},
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
    }


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

        }

    }

)

export const { getGheDangDat, resetPhimDangDat, changeActiveTab, changeActiveTabByMouse } = QuanLyDatVeServicesSliceReducer.actions

export default QuanLyDatVeServicesSliceReducer.reducer