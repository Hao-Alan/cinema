import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import { LayDanhSachBanner, LayThongTinLichChieuPhim } from '../../services/QuanLyPhimServices'

const initialState = {
    detail: {}
}



export const fetchDetailData = createAsyncThunk(
    'movie/fetchDetailData', async (id) => {
        try {
            const response = await LayThongTinLichChieuPhim(id)
            // console.log("response", response);
            return response.data.content
        } catch (error) {
            console.log('error', error);
        }
    })


export const DetailSlice = createSlice({
    name: 'DetailSlice',
    initialState,
    reducers: {
        setDetail(state, action) {
            state.detail = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailData.pending, (state) => {
                state.status = 'loading...'
            })
            .addCase(fetchDetailData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.detail = action.payload
            })

    }

}
)

export const { setDetail } = DetailSlice.actions

export default DetailSlice.reducer