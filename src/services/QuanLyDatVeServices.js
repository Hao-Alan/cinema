import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TOKEN, USER_LOGIN } from '../Utils/settings/config'
import { get, push, post, Delete } from './BaseServices'

export const QuanLyDatVeServices = (thongTinLich) => { // mã lịch chiếu lấy từ url param
    return get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${thongTinLich}`)
}

export const QuanLyDatVeServiceMoi = (phimPush) => {
    return post(`api/QuanLyDatVe/DatVe`, phimPush)
}

export const ThemPhimUploadHinh = (hinhAnh) => {
    return post(`api/QuanLyPhim/ThemPhimUploadHinh`, hinhAnh)
}


export const CapNhatPhimUpload = (filmData) => {
    return post(`api/QuanLyPhim/CapNhatPhimUpload`, filmData)
}

export const XoaPhimxx = (deleteMovie) => {
    return Delete(`api/QuanLyPhim/XoaPhim?MaPhim=${deleteMovie}`)
}


export const QuanLyLayThongTinHeThongRap = () => {
    return axios({
        method: 'GET',
        url: 'https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinHeThongRap',

    });
}

export const QuanLyLayThongTinCumRapTheoHeThong = (tenRap) => {
    return axios({
        method: 'GET',
        url: `https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${tenRap}`,
    });
}

export const QuanLyTaoLichChieu = (model) => {
    return axios({
        method: 'POST',
        data: model,
        url: `https://movieapi.cyberlearn.vn/api/QuanLyDatVe/TaoLichChieu`,
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem(TOKEN),
        }
    });
}
